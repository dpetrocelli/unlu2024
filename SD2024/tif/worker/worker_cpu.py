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
    url = "http://localhost:8080/solved_task"  # Adjust the URL as necessary
    try:
        response = requests.post(url, json=data)
        print("Post response:", response.text)
    except requests.exceptions.RequestException as e:
        print("Failed to send POST request:", e)

def on_message_received(ch, method, properties, body):
    
    data = json.loads(body)
    print (f"msg {data} received ")
    hash_objetivo = data['prefix']
    cadena_objetivo = data['base_string_chain']
    max_random = data['random_num_max']
    
    # Simplified brute force without threading
    encontrado = False
    start_time = time.time()
    print ("Starting mining process")
    while not encontrado:
        numero_aleatorio = str(random.randint(0, max_random))
        hash_calculado = calcular_sha256(numero_aleatorio + cadena_objetivo)
        if hash_calculado.startswith(hash_objetivo):
            encontrado = True
            result_data = {
                "id": data['id'],
                "data": data,
                "hash": hash_calculado,
                "number": numero_aleatorio,
                "base_string_chain": cadena_objetivo
            }
            post_result(result_data)
    
    ch.basic_ack(delivery_tag=method.delivery_tag)
    print(f"Result found and posted for block ID {data['id']} in {time.time() - start_time:.2f} seconds")

def main():
    # Connect to RabbitMQ server
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost', port=5672, credentials=pika.PlainCredentials('rabbitmq', 'rabbitmq'))
    )
    channel = connection.channel()

    # Declare the topic exchange
    channel.exchange_declare(exchange='block_challenge', exchange_type='topic', durable=True)

    # Declare a queue to receive messages and bind it
    result = channel.queue_declare('', exclusive=True)
    queue_name = result.method.queue
    channel.queue_bind(exchange='block_challenge', queue=queue_name, routing_key='blocks')

    # Start consuming messages
    channel.basic_consume(queue=queue_name, on_message_callback=on_message_received, auto_ack=False)
    print('Waiting for messages. To exit press CTRL+C')
    try:
        channel.start_consuming()
    except KeyboardInterrupt:
        print("Consumption stopped by user.")
    finally:
        connection.close()
        print("Connection closed.")

if __name__ == '__main__':
    main()
