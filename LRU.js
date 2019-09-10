/**
 * LRU 淘汰算法
 */
class LRUCache {
  constructor(cacheLimit) {
    this.head = null;
    this.end = null;
    this.cacheLimit = cacheLimit;
    this.hashMap = new Map();
  }

  /**
   * 从缓存中查找一个数据，然后将其移到双向链表的尾部
   * @param key key
   * @return value
   */
  get(key) {
    const node = this.hashMap.get(key);
    if (!node) {
      return null;
    }

    this.refreshNode(node);
    return node.value;
  }

  /**
   * 从缓存中移除一个数据
   * @param key key
   */
  remove(key) {
    const node = this.hashMap.get(key);
    if (node !== null) {
      this.removeNode(node);
      this.hashMap.remove(key);
    }
  }

  /**
   * 向缓存中添加一个数据
   * 缓存中存在，更新缓存的值，将其移到双向链表的尾部
   * 缓存中不存在，判断缓存是否已满
   * 已满，将链表的头节点删除，将数据添加的链表尾部
   * 未满，直接将数据插入到链表尾部
   * @param key key
   * @param value value
   */
  put(key, value) {
    let node = this.hashMap.get(key);
    if (node) {
      node.value = value;
      this.refreshNode(node);
    } else {
      if (this.hashMap.size >= this.cacheLimit) {
        const oldKey = this.removeNode(this.head);
        this.hashMap.delete(oldKey);
      }
      node = new Node(key, value);
      this.addNode(node);
      this.hashMap.set(key, node);
    }
  }

  /**
   * 刷新节点位置
   * @param node 节点
   */
  refreshNode(node) {
    if (node === this.end) {
      return;
    }
    this.removeNode(node);
    this.addNode(node);
  }
  /**
   * 双向链表尾部插入节点
   * @param node
   */
  addNode(node) {
    if (this.end !== null) {
      this.end.next = node;
      node.pre = this.end;
      node.next = null;
    }
    this.end = node;
    if (this.head == null) {
      this.head = node;
    }
  }

  /**
   * 删除节点
   * @param node 要删除的节点
   */
  removeNode(node) {
    if (node === this.head && node === this.end) {
      this.head = null;
      this.end = null;
    } else if (node === this.end) {
      this.end = this.end.pre;
      this.end.next = null;
    } else if (node === this.head) {
      this.head = this.head.next;
      this.head.pre = null;
    } else {
      node.pre.next = node.next;
      node.next.pre = node.pre;
    }
    return node.key;
  }

  show() {
    let node = this.head;
    while(node !== null) {
      console.log(node.key);
      node = node.next;
    }
    console.log('done');
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

const lruCache = new LRUCache(10)
lruCache.put('1', 1);
lruCache.put('2', 2);
lruCache.put('3', 3);
lruCache.put('4', 4);
lruCache.put('5', 5);
lruCache.put('6', 6);
lruCache.put('7', 7);
lruCache.put('8', 8);
lruCache.put('9', 9);
lruCache.put('10', 10);
lruCache.put('11', 11);
lruCache.show();
console.log('--------------------')
console.log(lruCache.get('2'));
console.log('--------------------')
lruCache.show();
lruCache.put('1222', 1122);
console.log('--------------------')
lruCache.show();