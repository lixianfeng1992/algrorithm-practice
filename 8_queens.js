var solveNQueens = function(n) {
  const result = [];
  if (n === 0) {
    return result;
  }

  const nums = new Array(n);
  for (let i = 0; i < n; i++) {
    nums[i] = i;
  }

  const col = new Array(n);
  const master = new Array(2 * n - 1);
  const slave = new Array(2 * n - 1);
  const stack = [];

  backtrack(nums, 0, n, col, master, slave, stack, result);

  return result;
};

function backtrack(nums, row, n, col, master, slave, stack, res) {
  if (row === n) {
    res.push(convert2Board(stack, n));
    return;
  }

  // 针对每一列，尝试是否可以放置
  for (let i = 0; i < n; i++) {
    if (!col[i] && !master[row + i] && !slave[row - i + n - 1]) {
      stack.push(nums[i]);
      col[i] = true;
      master[row + i] = true;
      slave[row - i + n - 1] = true;

      backtrack(nums, row + 1, n, col, master, slave, stack, res);
      stack.pop();
      col[i] = false;
      master[row + i] = false;
      slave[row - i + n - 1] = false;
    }
  }
} 

function convert2Board(stack, n) {
  return stack.map((i) => {
    let sb = '';
    for (let j = 0; j < n; j++) {
      if (j === i) {
        sb += 'Q';
      } else {
        sb += '.';
      }
    }
    return sb;
  });
}

console.warn(solveNQueens(4));