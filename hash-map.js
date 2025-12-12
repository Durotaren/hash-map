class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    if (typeof key !== 'string') {
      return 'Only string keys are accepted.';
    }

    const hashedKey = this.hash(key);

    if (this.buckets[hashedKey] !== null) {
      if (this.buckets[hashedKey].key === key) {
        this.buckets[hashedKey].value = value;
      }
    } else {
      this.buckets[hashedKey] = { key: key, value: value };
    }

    return this.buckets[hashedKey];
  }

  get(key) {
    const hashedKey = this.hash(key);

    if (this.buckets[hashedKey]) {
      return this.buckets[hashedKey].value;
    } else {
      return null;
    }
  }

  has(key) {
    const hashedKey = this.hash(key);

    if (this.buckets[hashedKey]) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    const hashedKey = this.hash(key);

    if (this.buckets[hashedKey]) {
      this.buckets[hashedKey] = null;
      return true;
    } else {
      return false;
    }
  }

  length() {
    let length = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== null) {
        length++;
      }
    }
    return length;
  }

  clear() {
    this.buckets.fill(null);
  }
}

const hashMap = new HashMap();
console.log(hashMap.set('Juggernaut', 'Dota 2'));
console.log(hashMap.has('Juggernaut'));
console.log(hashMap.length());
