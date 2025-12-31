import hashlib

passwords = ["Elifdevrim34", "Sirius3455"]
for p in passwords:
    hash_obj = hashlib.sha256(p.encode())
    print(f"{p}: {hash_obj.hexdigest()}")
