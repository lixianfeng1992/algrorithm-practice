// /**
//  * Initialize your data structure here.
//  */
// var MyStack = function() {
//     this.queue = [];
// };

// /**
//  * Push element x onto stack. 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//   this.queue.push(x);
// };

// /**
//  * Removes the element on top of the stack and returns that element.
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//   const tempQueue = [];
//   while (this.queue.length) {
//     const val = this.queue.shift();
//     if (this.queue.length === 0) {
//       this.queue = tempQueue;
//       return val;
//     } else {
//       tempQueue.push(val);
//     }
//   }
// };

// /**
//  * Get the top element.
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//   return this.queue[this.queue.length - 1];
// };

// /**
//  * Returns whether the stack is empty.
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//     return !this.queue.length
// };

// /** 
//  * Your MyStack object will be instantiated and called as such:
//  * var obj = new MyStack()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.empty()
//  */
// var obj = new MyStack()
// obj.push(1)
// obj.push(2)
// obj.push(3)
// console.log(obj.pop())
// console.log(obj.pop())
// console.log(obj.top())
// console.log(obj.pop())
// console.log(obj.empty())
// /**
//  * 933. 最近的请求次数
//  */
// var RecentCounter = function() {
//     this.queue = [];
// };

// /** 
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//     this.queue.push(t);
//     while(this.queue[0] < t - 3000) {
//       this.queue.shift();
//     }
//     return this.queue.length
// };

/**
 * 622. 设计循环队列
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.k = k
    this.head = -1
    this.tail = -1
    this.size = 0
    this.data = new Array(k)
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.size === this.k) return false
  if (this.tail === this.head && this.tail === -1) this.head++
  this.tail = this.tail === this.k - 1 ? 0 : this.tail + 1;
  this.size++;
  this.data[this.tail] = value;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.size === 0) return false
    delete this.data[this.head]
    this.head++
    this.size--
    if (this.size === 0) {
      this.head = -1;
      this.tail = -1;
    }
    if (this.head === this.k && this.size !== 0) {
      this.head = 0
    }
    return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.size === 0 ? -1 : this.data[this.head]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.size === 0 ? -1 : this.data[this.tail]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.k
};

var obj = new MyCircularQueue(10)
/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */