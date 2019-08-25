/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  var stack = [];
  var hashmap = {};
  var res = [];
  for (let i of nums2) {
    while (stack.length !== 0 && stack[stack.length - 1] < i) {
      hashmap[stack.pop()] = i;
    }
    stack.push(i);
  };

  for (let i of nums1) {
    res.push(hashmap[i] ? hashmap[i] : -1);
  }
  return res;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))