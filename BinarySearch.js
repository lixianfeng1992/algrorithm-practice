// function binarySearch(array, value) {
//   let low = 0;
//   let high = array.length - 1;

//   while(low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     // if (a[mid] === value) {
//     //   return mid;
//     // } else if (a[mid] < value) {
//     //   low = mid + 1;
//     // } else {
//     //   high = mid - 1;
//     // }
//     if (a[mind] > value) {
//       high = mid - 1
//     } else if (a[mid] < value) {
//       low = mid + 1;
//     } else {
//       if ((mid == 0) || (a[mid - 1] != value)) return mid;
//       else high = mid - 1;
//     }
//   }

//   return -1;
// }

// function bsearch(array, value) {
//   let low = 0;
//   let high = array.length - 1;

//   while(low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (a[mid] >= value) {
//       if ((mid === 0) || a[mid - 1] < value) return mid;
//       else high = mid - 1;
//     } else {
//       low = mid + 1
//     }
//   }
//   return -1;
// }

// /**
//  * 35. 搜索插入位置
//  */
// var searchInsert = function(nums, target) {
//   let high = nums.length - 1;
//   let low = 0;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] > target) {
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }

//   return low;
// };

// /**
//  * 350. 两个数组的交集 II
//  */
// var intersect = function(nums1, nums2) {
//   let hash = new Map()
//   let res = []
//   for (let i = 0; i < nums1.length; i++) {
//     if (hash.has[nums1[i]]) {
//       hash.set(nums1[i], hash.get(nums1[i]) + 1)
//     } else {
//       hash.set(nums1[i], 1)
//     }
//   }

//   for (let i = 0; i < nums2.length; i++) {
//     let temp = nums2[i]
//     let hashKey = hash.get(temp)
//     if (hash.has(temp)) {
//       res.push(temp)
//             if(hashKey > 1) {
//                 hash.set(temp, hashKey - 1)
//             } else {
//                 hash.delete(temp)
//             }
//     }
//   }

//   return res;
// };

// console.log(intersect([1,3,5,6], 7))

/**
 * 33. 搜索旋转排序数组
 */
var search = function(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if ((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid])) {
      low = mid + 1;
    } else {
      high = mid
    }
  }
  return low === high && nums[low] === target ? low : -1; 
};

console.log(search([4,5,6,7,0,1,2], 0))