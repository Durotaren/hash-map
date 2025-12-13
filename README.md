# HashMap & HashSet (JavaScript)

A custom implementation of HashMap and HashSet data structures built from scratch in JavaScript.  
This project focuses on understanding how hash-based data structures work internally, including hashing, load factors, dynamic resizing, and efficient data storage.

---

## Overview

The goal of this project is to recreate the core behavior of hash maps and hash sets without relying on JavaScript’s built-in `Map` or `Set`. Both implementations use a fixed-size bucket array, a custom hash function, and automatic resizing when a predefined load factor is exceeded.

Insertion order is not preserved, which is expected behavior for hash-based data structures.

---

## HashMap

The `HashMap` stores key–value pairs using string keys only.

### Supported Methods

- `set(key, value)` — Adds a new key–value pair or updates an existing key
- `get(key)` — Returns the value associated with a key, or `null` if not found
- `has(key)` — Returns `true` if the key exists, otherwise `false`
- `remove(key)` — Removes a key and returns `true` if successful
- `length()` — Returns the number of stored entries
- `clear()` — Removes all entries
- `keys()` — Returns an array of all stored keys
- `values()` — Returns an array of all stored values
- `entries()` — Returns an array of `[key, value]` pairs

---

## HashSet

The `HashSet` stores unique string keys without associated values.  
It follows the same hashing and resizing logic as the HashMap implementation.

### Supported Methods

- `set(key)` — Adds a key if it does not already exist
- `get(key)` — Returns the key if found, otherwise `null`
- `has(key)` — Returns `true` if the key exists
- `remove(key)` — Removes a key and returns `true` if successful
- `length()` — Returns the number of stored keys
- `clear()` — Removes all keys
- `keys()` — Returns an array of stored keys

---

## Implementation Details

- Buckets are stored in a fixed-size array
- A prime-number-based hash function is used
- Modulo is applied during hashing to prevent integer overflow
- The load factor is set to `0.75`
- When the load factor is exceeded, capacity is doubled and all entries are re-hashed
- Keys are limited to strings only
