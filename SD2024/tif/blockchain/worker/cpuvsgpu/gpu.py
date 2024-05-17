from numba import cuda
import numpy as np

@cuda.jit
def simple_hash_kernel(data, output):
    idx = cuda.grid(1)
    if idx < data.size:
        hash_val = 0xdeadbeefdeadbeef  # Starting with a random seed
        for i in range(data.shape[1]):
            byte = data[idx, i]
            # Mix the current byte into the hash value with a simple operation
            hash_val ^= byte << (i % 56)  # Rotate left simulated
            hash_val = ((hash_val << 3) | (hash_val >> (64 - 3))) & 0xFFFFFFFFFFFFFFFF  # Rotate 3 bits
        output[idx] = hash_val

def calculate_hashes_gpu(data_string):
    # Convert the string into a byte array for GPU processing
    data_np = np.frombuffer(data_string.encode('utf-8'), dtype=np.uint8)
    data_gpu = cuda.to_device(data_np)
    
    # Output array on GPU
    output_gpu = cuda.device_array(1, dtype=np.uint64)  # Using 64-bit integer
    
    threads_per_block = 128
    blocks_per_grid = 1
    
    simple_hash_kernel[blocks_per_grid, threads_per_block](data_gpu, output_gpu)
    
    return output_gpu.copy_to_host()

# Test the GPU hash
data = "Hello, this is a test for SHA-512 hashing."
gpu_hash_output = calculate_hashes_gpu(data)
print("Custom Hash (GPU):", gpu_hash_output[0])