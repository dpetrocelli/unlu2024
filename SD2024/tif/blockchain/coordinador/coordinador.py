from flask import Flask, request, jsonify
import pika
import json
import time
import redis
import random
import hashlib
import os
import sys
# Get the current script's directory
current_dir = os.path.dirname(os.path.abspath(__file__))
# Get the parent directory
parent_dir = os.path.dirname(current_dir)

print("Parent Directory:", parent_dir)
sys.path.append(parent_dir)
from services.redis_utils import RedisUtils
redis_utils = RedisUtils()

# Function to calculate the hash using the provided number and base string
# New hash function
def enhanced_hash(data):
    hash_val = 0
    for byte in data.encode('utf-8'):
        hash_val = (hash_val * 31 + byte) % (2**32)
        hash_val ^= (hash_val << 13) | (hash_val >> 19)  # Additional bit rotation
        hash_val = (hash_val * 17) % (2**32)  # Additional multiplication with a new constant
        hash_val = ((hash_val << 5) | (hash_val >> 27)) & 0xFFFFFFFF  # Final bitwise operation
    return hash_val

# Method to process packages every minute
def process_packages():            
        # Process messages in chunks of 5
        while True:
            package = []
            for _ in range(20):
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
                tail_elements = redis_utils.get_recent_messages()
                
            
                last_element = redis_utils.get_latest_element()

             
                max_random=99999999
                block_id= str(random.randint(0, max_random))
                
                block = {
                    "id": block_id,
                    "transactions": package,
                    "prefix": "000",  # Placeholder for difficulty
                    "base_string_chain": "A4FC",  # hexa for the goal
                    "blockchain_content": last_element["blockchain_content"] if last_element else "[]",  # the blockchain inmutability
                    "random_num_max": max_random
                }
                # Publish the package to" the 'blocks' topic exchange in RabbitMQ
                channel.basic_publish(exchange='block_challenge', routing_key='blocks', body=json.dumps(block))
                print(f"Package with block ID {block_id} sent to the 'blocks' topic exchange")
                  # Increment block ID for the next package
            
            time.sleep(10)        

        
# Connect to RabbitMQ server
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost', port=5672,
                                                               credentials=pika.PlainCredentials('rabbitmq', 'rabbitmq')))

channel = connection.channel()
# Declare queues
channel.queue_declare(queue='transactions')
# Declare the topic exchange
channel.exchange_declare(exchange='block_challenge', exchange_type='topic', durable=True)


# --- APP side --- 
app = Flask(__name__)

# Endpoint to check the status of the application
@app.route('/status', methods=['GET'])
def check_status():
    return jsonify({'status': 'running'})

# Method to handle incoming transactions (READY)
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

    

    
    # Calculate the hash using the provided number and base string
    combined_data = f"{data['number']}{data['base_string_chain']}{data['blockchain_content']}"
    calculated_hash = format(enhanced_hash(combined_data), '08x')
    timestamp = time.time()
    print("--------------------------------")
    print(f"Received hash: {data['hash']}")
    print(f"Locally calculated hash: {calculated_hash}")

    if data['hash'] == calculated_hash:
        print("Data is valid")
        print("--------------------------------")
        #Check if block_id exists in the database
        if redis_utils.exists_id(data['id']):
            print ("block exists")
            return jsonify({'message': 'Block already solved by another node. Discarding...'}), 200
        else:
            print ("block does not exists, it's time to add to the network")
            print (f"item hash: {data['hash']}" )
            print (f"old blockchain content: {data['blockchain_content']}" )
            blockchain_data = f"{data['base_string_chain']}{data['hash']}"
            blockchain_content = format(enhanced_hash(blockchain_data), '08x')
            print (f"blockchain content: {blockchain_content}" )
            
            # Get the hash of the latest block stored in the database
            try:
                previous_block = redis_utils.get_latest_element()
            except:
                previous_block = 'Null'
            if previous_block != None:
                print("--------------------------------")
                print(f"Previous block hash: {previous_block["hash"]}")
                data['previous_block'] = previous_block["hash"]
                print("--------------------------------")
            else:
                print("--------------------------------")
                print(f"Previous block hash: NULL ")
                print("--------------------------------")
                data['previous_block'] = "None"
            # Add timestamp and previous_block hash to the data
            data['timestamp'] = timestamp
            data['blockchain_content'] = blockchain_content
                
            print("------final-block-------")
            print (data)
            print("------final-block-------")
            
            redis_utils.post_message(message=data)
            
            return jsonify({'message': 'Block validated and added to the blockchain.'}), 201
     
          
    else:
        return jsonify({'message': 'Invalid hash. Discarding the package.'}), 400
        
# Run the process_packages method in a separate thread
import threading
process_packages_thread = threading.Thread(target=process_packages)
process_packages_thread.start()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080,debug=True)
