// /**
//  * 
//  * @param {Number} weight - 物品重量 
//  * @param {Number} n - 物品个数 
//  * @param {Number} w - 背包可承载重量
//  */
// function knapsack(items, n, w) {
//   const states = new Array(w + 1);

//   // 第一行特殊处理，哨兵优化
//   states[0] = true;
//   if (items[0] <= w) {
//     states[items[0]] = true;
//   }

//   for (let i = 1; i < n; ++i) {
//     for (let j = w - items[i]; j >= 0; --j) {
//       if (states[j]) {
//         states[j + items[i]] = true;
//       }
//     }
//   }
//   console.log(states);
// }

// var maxSubArray = function(nums) {
//   let n = nums.length;
//   let max_left, max_right, max_l, max_r;

//   if (n === 1) {
//     return nums[0];
//   } else {
//     let mid = (n / 2) | 0;
//     // 递归计算左半边最大子序和
//     max_left = maxSubArray(nums.slice(0, mid));
//     // 递归计算右半边最大子序和
//     max_right = maxSubArray(nums.slice(mid));
//   }

//   let mid = (n / 2) | 0;
//   max_l = nums[mid - 1];
//   let tmp = 0;
//   for (let i = mid - 1; i >= 0; --i) {
//     tmp += nums[i];
//     max_l = Math.max(tmp, max_l);
//   }

//   max_r = nums[mid];
//   tmp = 0;
//   for (let i = mid; i < n; ++i) {
//     tmp += nums[i];
//     max_r = Math.max(tmp, max_r);
//   }
//   return Math.max(max_left, max_right, max_l + max_r);
// };

// var maxProfit = function(prices) {
//   if (!prices.length) {
//     return 0;
//   }
  
//   let last = 0;
//   let maxProfit = last;
//   for (let i = 0; i < prices.length - 1; ++i) {
//     last = Math.max(0, last + prices[i + 1] - prices[i]);
//     maxProfit = Math.max(maxProfit, last);
//   } 
//   return maxProfit;
// };

// console.log(maxProfit([1, 2]))

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.res = [];
  const len = nums.length;
  if (len) {
    const dp = [];
    dp[0] = 0;
    for (let i = 1; i <= len; i++) {
      dp[i] = dp[i - 1] + nums[i - 1];
    }
    this.res = dp;
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  console.log(this.res)
  return this.res[j + 1] - this.res[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
var obj = new NumArray([-2, 0, 3, -5, 2, -1])
var param_1 = obj.sumRange(0, 5)
console.log(param_1)