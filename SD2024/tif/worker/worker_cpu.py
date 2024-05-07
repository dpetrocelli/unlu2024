import pika
import json
import hashlib
import random
import requests
import time

def calcular_sha256(texto):
    hash_sha256 = hashlib.sha256()
    hash_sha256.update(texto.encode('utf-8'))
    return hash_sha256.hexdigest()

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
   
    encontrado = False
    start_time = time.time()
    
    print("Starting mining process")
    while not encontrado:
        numero_aleatorio = str(random.randint(0, data['random_num_max']))
        hash_calculado = calcular_sha256(numero_aleatorio + data['base_string_chain'] + data['blockchain_content'])
        if hash_calculado.startswith(data['prefix']):
            encontrado = True
            processing_time=time.time() - start_time
            
            data["processing_time"] = processing_time
            data["hash"] = hash_calculado
            data["number"] = numero_aleatorio
            
            
            post_result(data)
    ch.basic_ack(delivery_tag=method.delivery_tag)
    print(f"Result found and posted for block ID {data['id']} in {processing_time:.2f} seconds")

def main():
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost', port=5672, credentials=pika.PlainCredentials('rabbitmq', 'rabbitmq'))
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
