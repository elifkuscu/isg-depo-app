# SHA-256 Hash Generator
# Kullanım: python hash_gen.py
# Şifrenizi girin ve hash değerini alın

import hashlib

def generate_hash(password):
    """Şifreyi SHA-256 ile hashler"""
    hash_obj = hashlib.sha256(password.encode())
    return hash_obj.hexdigest()

if __name__ == "__main__":
    print("SHA-256 Hash Generator")
    print("-" * 40)
    password = input("Hashlenecek şifreyi girin: ")
    hashed = generate_hash(password)
    print(f"\nHash: {hashed}")
    print("\nBu hash'i config.js veya GitHub Secret'a ekleyebilirsiniz.")
