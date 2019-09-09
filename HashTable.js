/**
 * 带碰撞处理的Hash表
 */
class HashTable {
  constructor() {
    this.store = Object.create(null);
  }

  hash(string) {
    let len = string.length;
    let hash = len;
    for (let i = 0; i < len; i++) {
      hash = ((hash << 5) ^ (hash >> 27)) ^ string.charCodeAt(i);
    }
    return hash & 0x7FFFFFFF;
  }

  isCrash(item) {
    return Object.prototype.toString.call(item) === "[object Map]";
  }

  /**
   * 约定 item 必须要有 key
   * @param {*} item
   */
  put(item) {
    if (typeof item.key !== 'string') {
      throw 'item must have key!'
    }
    let hash = this.hash(item.key);
    // 碰撞处理
    let crash = this.store[hash];
    if (crash) {
      if (crash.key === item.key) {
        this.store[hash] = item;
        return;
      }

      if (!this.isCrash(crash)) {
        this.store[hash] = new Map();
      }
      this.store[hash].set(item.key, item);
    } else {
      this.store[hash] = item;
    }
  }

  get(key) {
    let hash = this.hash(key);
    let value = this.store[hash] || null;
    if (this.isCrash(value)) {
      return value.get(key);
    } else {
      return value;
    }
  }

  remove(key) {
    let hash = this.hash(key);
    let value = this.store[hash];
    if (!value) {
      return null;
    }
    if (this.isCrash(value)) {
      value.delete(key);
    } else {
      delete this.store[hash];
    }
  }

  clear() {
    this.store = {};
  }

  print() {
    let values = Object.values(this.store);
    values.forEach(element => {
      if (this.isCrash(element)) {
        element.forEach(item => {
          console.log(item);
        });
      } else {
        console.log(element);
      }
    });
  }
}