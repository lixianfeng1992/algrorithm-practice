// https://zhuanlan.zhihu.com/p/57539549
// https://juejin.im/post/5b3b559b5188251af86bc431
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const tempQueue = [];
  while (this.queue.length) {
    const val = this.queue.shift();
    if (this.queue.length === 0) {
      this.queue = tempQueue;
      return val;
    } else {
      tempQueue.push(val);
    }
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue[this.queue.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj.pop())
console.log(obj.pop())
console.log(obj.top())
console.log(obj.pop())
console.log(obj.empty())