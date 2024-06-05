# import pika
# import json
# import hashlib
# import random
# import requests
# import time

# # New hash function
# def enhanced_hash(data):
#     hash_val = 0
#     for byte in data.encode('utf-8'):
#         hash_val = (hash_val * 31 + byte) % (2**32)
#         hash_val ^= (hash_val << 13) | (hash_val >> 19)  # Additional bit rotation
#         hash_val = (hash_val * 17) % (2**32)  # Additional multiplication with a new constant
#         hash_val = ((hash_val << 5) | (hash_val >> 27)) & 0xFFFFFFFF  # Final bitwise operation
#     return hash_val

# def post_result(data):
#     url = "http://localhost:8080/solved_task"
#     try:
#         response = requests.post(url, json=data)
#         print("Post response:", response.text)
#     except requests.exceptions.RequestException as e:
#         print("Failed to send POST request:", e)

# def on_message_received(ch, method, properties, body):
#     data = json.loads(body)
#     print(f"Message {data} received")
   
#     found = False
#     start_time = time.time()
    
#     print("Starting mining process")
#     while not found:
#         random_number = str(random.randint(0, data['random_num_max']))
#         combined_data = f"{random_number}{data['base_string_chain']}{data['blockchain_content']}"
#         calculated_hash = format(enhanced_hash(combined_data), '08x')
#         if calculated_hash.startswith(data['prefix']):
#             found = True
#             print (f"found true ; value: {calculated_hash}")
#             processing_time = time.time() - start_time
            
#             data["processing_time"] = processing_time
#             data["hash"] = calculated_hash
#             data["number"] = random_number
            
#             post_result(data)
#     ch.basic_ack(delivery_tag=method.delivery_tag)
#     print(f"Result found and posted for block ID {data['id']} in {processing_time:.2f} seconds")

# def main():
#     connection = pika.BlockingConnection(
#         pika.ConnectionParameters(host='localhost', port=5672, credentials=pika.PlainCredentials('rabbitmq', 'rabbitmq'))
#     )
#     channel = connection.channel()
#     channel.exchange_declare(exchange='block_challenge', exchange_type='topic', durable=True)
#     result = channel.queue_declare('', exclusive=True)
#     queue_name = result.method.queue
#     channel.queue_bind(exchange='block_challenge', queue=queue_name, routing_key='blocks')
#     channel.basic_consume(queue=queue_name, on_message_callback=on_message_received, auto_ack=False)
#     print('Waiting for messages. To exit press CTRL+C')
#     try:
#         channel.start_consuming()
#     except KeyboardInterrupt:
#         print("Consumption stopped by user.")
#         connection.close()
#         print("Connection closed.")

# if __name__ == '__main__':
#     main()

import pika
import json
import random
import requests
import time
import numpy as np

try:
    import cupy as cp
    cuda_available = True
    print (" ----------- ")
    print ("GPU WORKER ")
    print (" ----------- ")
except ImportError:
    cuda_available = False
    print (" ----------- ")
    print ("CPU WORKER ")
    print (" ----------- ")

# New hash function adapted for GPU/CPU
def enhanced_hash_gpu_cpu(data):
    if cuda_available:
        data_bytes = cp.asarray(data.encode('utf-8'))
        hash_val = cp.zeros(1, dtype=cp.uint32)
    else:
        data_bytes = np.frombuffer(data.encode('utf-8'), dtype=np.uint8)
        hash_val = np.array([0], dtype=np.uint32)
    
    for byte in data_bytes:
        hash_val = (hash_val * 31 + byte) % (2**32)
        hash_val ^= (hash_val << 13) | (hash_val >> 19)
        hash_val = (hash_val * 17) % (2**32)
        hash_val = ((hash_val << 5) | (hash_val >> 27)) & 0xFFFFFFFF
    
    return format(int(hash_val), '08x')

def post_result(data):
    url = "http://localhost:8080/solved_task"
    try:
        response = requests.post(url, json=data)
        print("Post response:", response.text)
    except requests.exceptions.RequestException as e:
        print("Failed to send POST request:", e)

def on_message_received(ch, method, properties, body):
    data = json.loads(body)
    print(f"Message {data} received")
   
    found = False
    start_time = time.time()
    
    print("Starting mining process")
    while not found:
        random_number = str(random.randint(0, data['random_num_max']))
        combined_data = f"{random_number}{data['base_string_chain']}{data['blockchain_content']}"
        calculated_hash = enhanced_hash_gpu_cpu(combined_data)
        if calculated_hash.startswith(data['prefix']):
            found = True
            processing_time = time.time() - start_time
            
            data["processing_time"] = processing_time
            data["hash"] = calculated_hash
            data["number"] = random_number
            
            post_result(data)
    ch.basic_ack(delivery_tag=method.delivery_tag)
    print(f"Result found and posted for block ID {data['id']} in {processing_time:.2f} seconds")

def main():
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='rabbitmq.10.net.ar', port=5672, credentials=pika.PlainCredentials('default_user_Qbk1npkSCU-5XCFtVIo', '7Fzm8EEge3q2E21Uy2dldiok8jrIEwPT'))
    )
    channel = connection.channel()
    channel.exchange_declare(exchange='block_challenge', exchange_type='topic', durable=True)
    result = channel.queue_declare('', exclusive=True)
    queue_name = result.method.queue
    channel.queue_bind(exchange='block_challenge', queue=queue_name, routing_key='blocks')
    channel.basic_consume(queue=queue_name, on_message_callback=on_message_received, auto_ack=False)
    print('Waiting for messages. To exit press CTRL+C')
    try:
        channel.start_consuming()
    except KeyboardInterrupt:
        print("Consumption stopped by user.")
        connection.close()
        print("Connection closed.")

if __name__ == '__main__':
    main()
