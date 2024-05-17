import hashlib
import random
import string
import threading
import os
from queue import Queue
import time
from tabulate import tabulate

def calcular_sha256(texto):
    hash_sha256 = hashlib.sha256()
    hash_sha256.update(texto.encode('utf-8'))
    return hash_sha256.hexdigest()

def validar_hash(hash_objetivo, cadena_objetivo, numero_aleatorio, hash_calculado):
    validacion_hash = calcular_sha256(numero_aleatorio + cadena_objetivo)
    return validacion_hash.startswith(hash_objetivo) and validacion_hash == hash_calculado

def fuerza_bruta(hash_objetivo, cadena_objetivo, max_random, stop_event, result_queue):
    while not stop_event.is_set():
        numero_aleatorio = str(random.randint(0, max_random))
        hash_calculado = calcular_sha256(numero_aleatorio + cadena_objetivo)
        if hash_calculado.startswith(hash_objetivo):
            result_queue.put((hash_objetivo, hash_calculado, numero_aleatorio, time.time()))
            stop_event.set()

def iniciar_threads(num_threads, hash_objetivo, cadena_objetivo, max_random, tiempo_inicio):
    stop_event = threading.Event()
    result_queue = Queue()
    threads = []
    for i in range(num_threads):
        thread = threading.Thread(target=fuerza_bruta, args=(hash_objetivo, cadena_objetivo, max_random, stop_event, result_queue))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    results = []
    while not result_queue.empty():
        results.append(result_queue.get())
    return results

if __name__ == "__main__":
    cadena_objetivo = "abasdfavefededfzdf"
    num_threads = os.cpu_count()
    print (f"threads {num_threads}")
    max_longitud = int(input("Ingrese la longitud máxima del hash objetivo: "))
    max_random = input("Ingrese el valor máximo para el random (deje en blanco para usar 999): ")
    max_random = int(max_random) if max_random.strip() != "" else 999

    hash_objetivos = ["0" * i for i in range(1, max_longitud + 1)]

    all_results = []
    for hash_objetivo in hash_objetivos:
        tiempo_inicio = time.time()
        resultados = iniciar_threads(num_threads, hash_objetivo, cadena_objetivo, max_random, tiempo_inicio)
        for result in resultados:
            hash_objetivo, hash_calculado, numero_aleatorio, tiempo_fin = result
            tiempo_total = tiempo_fin - tiempo_inicio
            is_valid = validar_hash(hash_objetivo, cadena_objetivo, numero_aleatorio, hash_calculado)
            all_results.append([hash_objetivo, f"{tiempo_total:.4f} segundos", hash_calculado, numero_aleatorio, "Valid" if is_valid else "Invalid"])

    print(tabulate(all_results, headers=["Hash Objetivo", "Tiempo Total", "Hash Encontrado", "Número Generado", "Validación"], tablefmt="grid"))

# Por ejemplo, si el hash objetivo es "0a" y la cadena objetivo es "abc", 
# entonces estamos buscando un número tal que, al ser concatenado con "abc" y calcular su hash SHA-256, el resultado comience con "0a".