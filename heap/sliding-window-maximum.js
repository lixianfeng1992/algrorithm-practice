/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) {
    return [];
  }
  let arr = [];
  let list = [];
  for (let i = 0, index = 0; i < nums.length; i++) {
    while (list.length && nums[list[list.length - 1]] < nums[i]) {
      list.pop();
    }
    list.push(i);
    if (list[0] === i - k) {
      list.shift();
    }
    if (i >= k - 1) {
      arr[index++] = nums[list[0]];
    }
  }
  return arr;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)