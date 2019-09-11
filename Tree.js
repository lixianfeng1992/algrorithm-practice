/**
 * 二叉树遍历
 */
function preOrder(root) {
  if (root === null) {
    return;
  }

  console.log(root);
  preOrder(root.left);
  preOrder(root.right);
}

function inOrder(root) {
  if (root === null) {
    return;
  }

  inOrder(root.left);
  console.log(root);
  inOrder(root.right);
}

function postOrder(root) {
  if (root === null) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  console.log(root);
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * 搜索二叉树
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  find(value) {
    let p = this.tree;
    while (p !== null) {
      if (value < p.value) {
        p = p.left;
      } else if (value > p.value) {
        p = p.right;
      } else {
        return p;
      }
    }
    return null;
  }

  insert(value) {
    if (this.tree === null) {
      this.tree = new Node(value);
      return;
    }

    let p = this.tree;
    while (p !== null) {
      if (value > p.value) {
        if (p.right === null) {
          p.right = new Node(value);
          return;
        }
        p = p.right;
      } else {
        if (p.left === null) {
          p.left = new Node(value);
          return;
        }
        p = p.left;
      }
    }
  }

  delete(value) {
    let p = this.tree;
    pp = null;
    while (p !== null && p.value !== value) {
      pp = p;
      if (value > p.value) {
        p = p.right;
      } else {
        p = p.left;
      }
    }
    if (p === null) {
      return;
    }

    if (p.left !== null && p.right !== null) {
      let minP = p.right;
      let minPP = p;
      while (minP.left !== null) {
        minPP = minP;
        minP = minP.left;
      }
      p.data = minP.data;
      p = minP;
      pp = minPP;
    }

    let child;
    if (p.left !== null) {
      child = p.left;
    } else if (p.right !== null) {
      child = p.right;
    } else {
      child = null;
    }

    if (pp === null) {
      tree = child;
    } else if (pp.left === p) {
      pp.left = child;
    } else {
      pp.right = child;
    }
  }
}