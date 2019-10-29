/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root || (!root.left && !root.right)) {
    return root
  } 

  if (root.left) {
    invertTree(root.left);
  }

  if (root.right) {
    invertTree(root.right);
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(4);
const l1 = new TreeNode(2);
const l2 = new TreeNode(7);
const l3 = new TreeNode(1);
const l4 = new TreeNode(3);
const l5 = new TreeNode(6);
const l6 = new TreeNode(9);

root.left = l1;
root.right = l2;
l1.left = l3;
l1.right = l4;
l2.left = l5;
l2.right = l6;

invertTree(root);

console.log(root)