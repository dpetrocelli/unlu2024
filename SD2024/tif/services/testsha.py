import hashlib
import sys

def calculate_sha256(text):
    hash_sha256 = hashlib.sha256()
    hash_sha256.update(text.encode('utf-8'))
    return hash_sha256.hexdigest()

def main():
    # Check if the text argument is provided
    if len(sys.argv) != 2:
        print("Usage: python script_name.py <text>")
        return
    
    # Get the text from command-line argument
    text = sys.argv[1]

    # Calculate and print the SHA-256 hash
    hash_value = calculate_sha256(text)
    print("SHA-256 Hash:", hash_value)

if __name__ == "__main__":
    main()