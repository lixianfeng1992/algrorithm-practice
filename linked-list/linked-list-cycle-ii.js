/**
 * 142. 环形链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head, fast = head;
  while (true) {
    if (fast.next === null || fast.next.next === null) return null;

    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }
  fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(1);
let l2 = new ListNode(2);

l1.next = l2;
l2.next = l1;

console.log(detectCycle(l1))