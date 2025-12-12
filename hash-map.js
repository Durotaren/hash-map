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
}

const hashMap = new HashMap();
console.log(hashMap.set('Juggernaut', 'Dota 2'));
