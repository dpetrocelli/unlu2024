import pika
import json

def on_message_received(ch, method, properties, body):
    print("Received message: %r" % json.loads(body))
    ch.basic_ack(delivery_tag=method.delivery_tag)

def main():
    # Connect to RabbitMQ server
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost', port=5672, credentials=pika.PlainCredentials('rabbitmq', 'rabbitmq'))
    )
    channel = connection.channel()

    # Declare the topic exchange
    channel.exchange_declare(exchange='block_challenge', exchange_type='topic', durable=True)

    # Declare a queue to receive messages
    result = channel.queue_declare('', exclusive=True)
    queue_name = result.method.queue

    # Bind the queue to the exchange
    routing_key = 'blocks'  # Adjust routing key based on your specific needs
    channel.queue_bind(exchange='block_challenge', queue=queue_name, routing_key=routing_key)

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
