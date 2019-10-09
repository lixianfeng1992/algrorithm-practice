/**
 * 双指针法
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b)
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    let i = k + 1, j = nums.length - 1;
    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        while (i < j && nums[i] === nums[++i]) {} 
      } else if (sum > 0) {
        while (i < j && nums[j] === nums[--j]) {} 
      } else {
        res.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[++i]) {}
        while (i < j && nums[j] === nums[--j]) {}
      }
    }
  }
  return res;
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));