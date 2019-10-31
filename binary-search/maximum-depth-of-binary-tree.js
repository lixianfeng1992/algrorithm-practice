/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(3);
const l1 = new TreeNode(9);
const l2 = new TreeNode(20);
const l3 = new TreeNode(15);
const l4 = new TreeNode(7);

root.left = l1;
root.right = l2;
l2.left = l3;
l2.right = l4;

console.log(maxDepth(root));