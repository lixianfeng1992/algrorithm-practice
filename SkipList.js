/**
 * 对链表稍加改造，就可以支持类似“二分”的查找算法。我们把改造就可以支持类似“二分”的查找算法。我们把改造之后的数据结构叫作跳表（Skip list）
 */
const MAX_LEVEL = 16;

class Node {
  constructor({ data = -1, maxLevel = 0, refer = new Array(MAX_LEVEL) }) {
    this.data = data;
    this.maxLevel = maxLevel;
    this.refer = refer;
  }
}

class SkipList {
  constructor() {
    this.head = new Node();
    this.levelCount = 1;
  }

  randomLevel() {
    let level = 1;
    for (let i = 1; i < MAX_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++;
      }
    }
    return level;
  }

  insert(value) {
    const level = this.randomLevel();
    const newNode = new Node({ data, maxLevel: level });
    const update = new Array(level).fill(new Node());
    let p = this.head;
    for (let i = level - 1; i >= 0; i--) {
      while(p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
      update[i] = p;
    }
    for (let i = 0; i < level; i++) {
      newNode.refer[i] = update[i].refer[i];
      update[i].refer[i] = newNode;
    }
    if (this.levelCount < level) {
      this.levelCount = level;
    }
  }

  find(value) {
    if (!value) {
      return null;
    }

    let p = this.head;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while(p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i]
      }
    }
    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      return p.refer[0]
    }
    return null;
  }

  remove(value) {
    let _node;
    let p = this.head;
    const update = new Array(new Node());
    for(let i = this.levelCount - 1; i >= 0; i--) {
      while(p.refer[i] !== undefined && p.refer[i].data < value){
      p = p.refer[i];
      }
      update[i] = p;
    }

    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      _node = p.refer[0];
      for (let i = 0; i < this.levelCount - 1; i++) {
        if (update[i].refer[i] !== undefined && update[i].refer[i].data === value) {
          update[i].refer[i] = update[i].refer[i].refer[i];
        }
      }
      return _node;
    }

    return null;
  }

  printAll() {
    let p = this.head;
    while(p.refer[0] !== undefined) {
      // console.log(p.refer[0].data)
      p = p.refer[0];
    }
  }
}