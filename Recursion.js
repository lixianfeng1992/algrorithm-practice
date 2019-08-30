/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  if (!nums.length || nums.length < k) {
    return false
  }

  let sum = 0, avg = 0, max = 0;
  for (let i of nums) {
    sum += i;
    if (max < i) {
      max = i;
    }
  }
  if (sum % k !== 0 || max > sum / k) {
    return false;
  }
  avg = sum / k;
  nums.sort((a, b) => b - a)
  let used = new Set();

  function dfs(k, start = 0, tmpSum = 0) {
    if (tmpSum === avg) {
      return dfs(k - 1, 0, 0);
    }

    if (k === 1) {
      return true;
    }

    for (let i in nums.slice(start)) {
      if (!used[i] && nums[i] + tmpSum <= avg) {
        used.add(i);
        if (dfs(k, i + 1, nums[i] + tmpSum)) {
          return true;
        }
        used.delete(i);
      }
    }
    return false;
  }
  return dfs(k);
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4))