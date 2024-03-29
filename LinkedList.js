// /**
//  * 1) 单链表反转
//  * 2) 链表中环的检测
//  * 3) 两个有序的链表合并
//  * 4) 删除链表倒数第n个结点
//  * 5) 求链表的中间结点
//  */
// class Node {
//   constructor(element) {
//     this.element = element;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = new Node('head');
//   }

//   // 根据 value 查找节点
//   findByValue(item) {
//     let currentNode = this.head;
//     while (currentNode !== null && currentNode.element !== item) {
//       currentNode = currentNode.next;
//     }

//     return currentNode === null ? -1 : currentNode;
//   }

//   // 根据 index 查找节点
//   findByIndex(index) {
//     let pos = 0;
//     let currentNode = this.head;
//     while (currentNode !== null && pos !== index) {
//       currentNode = currentNode.next;
//       pos++;
//     }

//     return currentNode === null ? -1 : currentNode;
//   }

//   // 指定元素向后插入
//   insert(newElement, element) {
//     const currentNode = this.findByValue(element);
//     if (currentNode === -1) {
//       console.log('未找到插入位置');
//       return;
//     }

//     const newNode = new Node(newElement);
//     newNode.next = currentNode.next;
//     currentNode.next = newNode;
//   }

//   // 查找前一个
//   findPrev(item) {
//     let currentNode = this.head;
//     while (currentNode.next !== null && currentNode.next.element !== item) {
//       currentNode = currentNode.next;
//     }
//     if (currentNode.next === null) {
//       return -1;
//     }
    
//     return currentNode;
//   }

//   // 根据值删除
//   remove(item) {
//     const desNode = this.findByValue(item);
//     if (desNode === -1) {
//       console.log('未找到元素');
//       return;
//     }

//     const prevNode = this.findPrev(item);
//     prevNode.next = desNode.next;
//   }

//   // 遍历显示所有节点
//   display() {
//     if (this.checkCircle()) return false;

//     let currentNode = this.head;
//     while (currentNode !== null) {
//       console.log(currentNode.element);
//       currentNode = currentNode.next;
//     }
//   }

//   // 尾插法 反转单链表
//   reverseList() {
//     const root = new Node('head');
//     let currentNode = this.head.next;
//     while (currentNode !== null) {
//       const next = currentNode.next;
//       currentNode.next = root.next;
//       root.next = currentNode;
//       currentNode = next;
//     }
//     this.head = root;
//   }

//   // 验证环
//   checkCircle() {
//     let fast = this.head.next;
//     let slow = this.head;
//     while (fast !== null && fast.next !== null) {
//       fast = fast.next.next;
//       slow = slow.next;
//       if (slow === fast) return true;
//     }
//     return false;
//   }

//   // 删除倒数第k个节点
//   removeByIndexFromEnd(index) {
//     //务必先判断是否是 环链表
//     if(this.checkCircle()) return false

//     let pos = 1;
//     this.reverseList();
//     let currentNode = this.head.next;
//     while (currentNode !== null && pos < index) {
//       currentNode = currentNode.next;
//       pos++;
//     }
//     if (currentNode === null) {
//       console.log('无法删除最后一个节点或者该节点不存在');
//       return false;
//     }
//     this.remove(currentNode.element);
//     this.reverseList();
//   }

//   // 求中间节点
//   findMiddleNode() {
//     let fast = this.head;
//     let slow = this.head;
//     while (fast.next !== null && fast.next.next !== null) {
//       fast = fast.next.next;
//       slow = slow.next;
//     }
//     console.log(slow);
//     return slow;
//   }
// }

// const mergeSortedLists = (listA, listB) => {
//   if (!listA) {
//     return listB;
//   }

//   if (!listB) {
//     return listA;
//   }

//   let a = listA;
//   let b = listB;
//   let resultList = undefined;
//   if (a.element < b.element) {
//     resultList = a;
//     a = a.next;
//   } else {
//     resultList = b;
//     b = b.next;
//   }
//   let currentNode = resultList;
//   while (a !== null && b !== null) {
//     if (a.element < b.element) {
//       currentNode.next = a;
//       a = a.next;
//     } else {
//       currentNode.next = b;
//       b = b.next;
//     }
//     currentNode = currentNode.next;
//   }

//   if (a != null) {
//     currentNode.next = a;
//   } else {
//     currentNode.next = b;
//   }
//   return resultList;
// }

// const LList = new LinkedList()
// LList.insert('chen', 'head')
// LList.insert('curry', 'chen')
// LList.insert('sang', 'head')
// LList.insert('zhao', 'head')
// LList.display()
// console.log('-------------start reverse------------')
// LList.reverseList()
// LList.display()

// const sortedList1 = new LinkedList()
// sortedList1.insert(9, 'head')
// sortedList1.insert(8, 'head')
// sortedList1.insert(7, 'head')
// sortedList1.insert(6, 'head')
// const sortedList2 = new LinkedList()
// sortedList2.insert(21, 'head')
// sortedList2.insert(20, 'head')
// sortedList2.insert(19, 'head')
// sortedList2.insert(18, 'head')
// console.log('-------------sort two list ------------')
// let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next);
// while (sortedList !== null) {
//   console.log(sortedList.element)
//   sortedList = sortedList.next
// }

/**
 * 232. 用栈实现队列
 */
var MyQueue = function() {
  this.stackA = [];
  this.stackB = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackA.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.stackB.length) {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
  }
  return this.stackB.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.stackA.length) {
    while (this.stackB.length) {
      this.stackA.push(this.stackB.pop())
    }
  }
  return this.stackA[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if (this.stackA.length || this.stackB.length) {
    return false
  } 
  return true
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */