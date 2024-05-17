import time

def enhanced_hash(data):
    hash_val = 0
    for byte in data.encode('utf-8'):
        hash_val = (hash_val * 31 + byte) % (2**32)
        hash_val ^= (hash_val << 13) | (hash_val >> 19)  # Additional bit rotation
        hash_val = (hash_val * 17) % (2**32)  # Additional multiplication with a new constant
        hash_val = ((hash_val << 5) | (hash_val >> 27)) & 0xFFFFFFFF  # Final bitwise operation
    return hash_val


def find_nonce_cpu(block):
    nonce = 0
    target_prefix = '0' * len(block["prefix"])
    start_time = time.time()
    while True:
        data = f"{block['base_string_chain']}{block['blockchain_content']}{nonce}"
        hash_output = format(enhanced_hash(data), '08x')
        if hash_output.startswith(target_prefix):
            end_time = time.time()
            print(f"Nonce found: {nonce}")
            print(f"Hash output: {hash_output}")
            print(f"Execution time (CPU): {end_time - start_time} seconds")
            
            
            return nonce, hash_output
        nonce += 1

# Example usage
block = {
    "id": 1,
    "transactions": "example_transactions",
    "prefix": "0000",  # Difficulty level indicating the required number of leading zeros
    "base_string_chain": "A4FC",  # Hexadecimal goal
    "blockchain_content": "[]",  # Placeholder for blockchain data
    "random_num_max": 1000000  # Upper limit for random number generation
}

nonce, hash_output = find_nonce_cpu(block)

validate_data=f"{block['base_string_chain']}{block['blockchain_content']}{nonce}"
validate_hash = format(enhanced_hash(validate_data), '08x')
# Validate the result before returning
if validate_hash==hash_output:
    print("The mining result is valid.")
    print (f"nonce: {nonce}")
    print (f"hash_output: {hash_output}")
else:
    print("Invalid mining result.")
