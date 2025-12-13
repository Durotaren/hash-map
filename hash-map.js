export class HashMap {
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

    this.grow();

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

  keys() {
    let arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== null) {
        arr.push(this.buckets[i].key);
      }
    }
    return arr;
  }

  values() {
    let arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== null) {
        arr.push(this.buckets[i].value);
      }
    }
    return arr;
  }

  entries() {
    let arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== null) {
        arr.push([this.buckets[i].key, this.buckets[i].value]);
      }
    }
    return arr;
  }

  grow() {
    if (this.length() > this.capacity * this.loadFactor) {
      const oldBucket = this.buckets;
      this.capacity = this.capacity * 2;
      this.buckets = new Array(this.capacity).fill(null);
      oldBucket.forEach((item) => {
        if (item !== null) {
          this.set(item.key, item.value);
        }
      });
    }
  }
}
