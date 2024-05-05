from flask import Flask, request, jsonify
import pika
import json
import time
import redis
import hashlib

# Method to retrieve the latest block ID from Redis
def get_latest_block_id():
    latest_id = redis_client.get('latest_block_id')
    if latest_id is None:
        return 1  # If database is empty, start with ID 1
    else:
        return int(latest_id) + 1



# Method to process packages every minute
def process_packages():
   while True:
        block_id = get_latest_block_id()  # Get the latest block ID

        # Process messages in chunks of 5
        while True:
            package = []
            for _ in range(5):
                method_frame, header_frame, body = channel.basic_get(queue='transactions', auto_ack=False)
                if method_frame:
                    # Add the message to the package
                    package.append(json.loads(body))
                    # Acknowledge the message
                    channel.basic_ack(delivery_tag=method_frame.delivery_tag)
                else:
                    break  # No more messages available

            if package:
                # Add metadata to the block package
                block = {
                    "id": block_id,
                    "transactions": package,
                    "prefix": "000",  # Placeholder for difficulty
                    "base_string_chain": "asdf",  # Placeholder for the goal
                    "random_num_max": 9999
                }
                # Publish the package to the 'blocks' topic exchange in RabbitMQ
                channel.basic_publish(exchange='block_challenge', routing_key='blocks', body=json.dumps(block))
                print(f"Package with block ID {block_id} sent to the 'blocks' topic exchange")
                block_id += 1  # Increment block ID for the next package
            else:
                break  # Break the loop if no messages were fetched

        # Wait for 30 seconds before next batch processing
        time.sleep(10)
            
# Function to calculate the hash using the provided number and base string
def calculate_hash(base_string_chain, number):
    hash_input = base_string_chain + str(number)
    return hashlib.sha256(hash_input.encode()).hexdigest()

# Connect to Redis
redis_client = redis.StrictRedis(host='localhost', port=6379, db=0, password='eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81')

# Connect to RabbitMQ
# Connect to RabbitMQ server
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost', port=5672,
                                                               credentials=pika.PlainCredentials('rabbitmq', 'rabbitmq')))

channel = connection.channel()
# Declare queues
channel.queue_declare(queue='transactions')
# Declare the topic exchange
channel.exchange_declare(exchange='block_challenge', exchange_type='topic', durable=True)




app = Flask(__name__)

# Endpoint to check the status of the application
@app.route('/status', methods=['GET'])
def check_status():
    return jsonify({'status': 'running'})

# Method to handle incoming transactions
@app.route('/transaction', methods=['POST'])
def receive_transaction():
    
    data = request.get_json()
    print (f"transaction: {data} received ")
    user_from = data['user_from']
    user_to = data['user_to']
    amount = data['amount']
    # Publish the message to the 'transactions' queue in RabbitMQ
    channel.basic_publish(exchange='', routing_key='transactions', body=json.dumps(data))
    return 'Transaction received and queued in RabbitMQ\n'


# Method to receive data from worker when task is solved
@app.route('/solved_task', methods=['POST'])
def receive_solved_task():
    data = request.get_json()
    block_id = data['id']
    block_hash = data['hash']
    number = data['number']
    base_string_chain = data['base_string_chain']
    print (f"processed task is {data}")
     # Calculate the hash using the provided number and base string
    calculated_hash = calculate_hash(base_string_chain, number)
    timestamp = time.time()
    # Validate the hash
    print (f"calculated hash:{hash}")
    print (f"local-calculation:{calculated_hash}")
    if block_hash == calculated_hash:
        # Check if block_id exists in the database
        print ("data is valid")
        if redis_client.exists(block_id):
            return 'Block already solved by another node. Discarding...'
        else:
            # Get the hash of the latest block stored in the database
            previous_block_hash = redis_client.hget('latest_block', 'hash')
            print (f"previous {previous_block_hash}")
            if previous_block_hash:
                previous_block_hash = previous_block_hash.decode('utf-8')
                # Add timestamp and previous_block hash to the data
                data['timestamp'] = timestamp
                data['previous_block'] = previous_block_hash
            else:
                # If it's the first block, set previous_block to null
                data['timestamp'] = timestamp
                data['previous_block'] = None
            # Store block information in the database
            redis_client.hmset(block_id, data)
            # Update the latest_block key in the database with the current block
            redis_client.hset('latest_block', 'hash', block_hash)
            return 'Block validated and added to the blockchain.'
    else:
        return 'Invalid hash. Discarding the package.'
        
# Run the process_packages method in a separate thread
import threading
process_packages_thread = threading.Thread(target=process_packages)
process_packages_thread.start()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080,debug=True)
