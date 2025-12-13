export class HashSet {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key) {
    if (typeof key !== 'string') {
      return 'Only string keys are accepted.';
    }

    const hashedKey = this.hash(key);

    if (this.buckets[hashedKey] === null) {
      this.buckets[hashedKey] = key;
      this.size++;
    } else {
      return 'Key is already present.';
    }

    this.grow();

    return this.buckets[hashedKey];
  }

  get(key) {
    const hashedKey = this.hash(key);

    if (this.buckets[hashedKey]) {
      return this.buckets[hashedKey];
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
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets.fill(null);
  }

  keys() {
    let arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== null) {
        arr.push(this.buckets[i]);
      }
    }
    return arr;
  }

  grow() {
    if (this.length() > this.capacity * this.loadFactor) {
      this.size = 0;
      const oldBucket = this.buckets;
      this.capacity = this.capacity * 2;
      this.buckets = new Array(this.capacity).fill(null);
      oldBucket.forEach((item) => {
        if (item !== null) {
          this.set(item.key);
        }
      });
    }
  }
}

const test = new HashSet();
console.log(test.set('apple'));
test.set('banana');
test.set('carrot');
console.log(test.has('apple'));
