// /**
//  * 哈希表
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//   const countMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     countMap[nums[i]] = countMap[nums[i]] || 0
//     if (++countMap[nums[i]] > nums.length / 2) {
//       return nums[i];
//     }
//   }
// };

/**
 * 摩尔投票法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = nums[0], count = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === candidate) {
      count++;
    } else if (count === 0) {
      candidate = nums[i];
    } else {
      count--;
    }
  }
  return candidate;
};

console.log(majorityElement([3,2,3]))