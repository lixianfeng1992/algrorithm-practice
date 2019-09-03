/**
 * 冒泡排序
 */
// function bubbleSort(nums, n) {
//   if (n <= 1) {
//     return;
//   }

//   for (let i = 0; i < n; i++) {
//     // 如果本次循环已经没有数据变化，提前结束
//     let flag = false;
//     for (let j = 0; j < n - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         let tmp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = tmp;
//         flag = true;
//       }
//     }
//     if (!flag) break;
//   }
// }

/**
 * 归并排序
 */
// function mergeSort(array) {
//   function sort(array, first, last) {
//     first = (first === undefined) ? 0 : first;
//     last  = (last === undefined) ? 0 : last;
//     if (last - first < 1) {
//       return;
//     }
//     var middle = Math.floor((first + last) / 2);
//     sort(array, first, middle);
//     sort(array, middle + 1, last);

//     var f = first, m = middle, i, temp;
//     while(f < m && m + 1 <= last) {
//       if (array[f] >= array[m + 1]) {
//         temp = array[m + 1];
//         for (i = m; i >= f; i--) {
//           array[i + 1] = array[i];
//         }
//         array[f] = temp;
//         m++;
//       } else {
//         m++;
//       }
//     }
//     return array;
//   }
//   return sort(array);
// }

/**
 * 快速排序
 */
// function quickSort(array) {
//   function swap(array, i, k) {
//     var temp = array[i];
//     array[i] = array[k];
//     array[k] = temp;
//   }

//   function partition(array, left, right) {
//     var storeIndex = left;
//     var pivot = array[right];
//     for (var i = left; i < right; i++) {
//       if (array[i] < pivot) {
//         swap(array, storeIndex, i);
//         storeIndex++;
//       }
//     }
//     swap(array, right, storeIndex);
//     return storeIndex;
//   }

//   function sort(array, left, right) {
//     if (left >= right) {
//       return;
//     }
//     var storeIndex = partition(array, left, right);
//     sort(array, left, storeIndex - 1);
//     sort(array, storeIndex + 1, right);
//   }

//   sort(array, 0, array.length - 1);
//   return array;
// }

/**
 * 插入排序
 */
// function insertionSort(array) {
//   let temp;
//   for (let i = 1; i < array.length; i++) {
//     temp = array[i];
//     for (let j = i; j >=0; j--) {
//       if (array[j - 1] > temp) {
//         array[j] = array[j - 1];
//       } else {
//         array[j] = temp;
//         break;
//       }
//     }
//   }
//   return array;
// }

/**
 * 桶排
 */
// function bucketSort(array, step) {
//   let bucket = [], result = [], bucketCount, l = array.length, max = array[0], min = array[0], temp, k;
//   // 找到数组范围
//   for (let i = 0; i < l; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   // 计算需要的桶数
//   min = min - 1;
//   bucketCount = Math.ceil((max - min) / step);

//   for (let i = 0; i < l; i++) {
//     temp = array[i];
//     for (let j = 0; j < bucketCount; j++) {
//       if (temp > (min + step * j) && temp <= (min + step * (j + 1))) { // 判断当前值属于哪个桶
//         if (!bucket[j]) {
//           bucket[j] = [];
//         }
//         // 通过插入排序将数字插到合适的位置
//         let s = bucket[j].length;
//         if (s > 0) {
//           for (k = s - 1; k >= 0; k--) {
//             if (bucket[j][k] > temp) {
//               bucket[j][k + 1] = bucket[j][k];
//             } else {
//               break;
//             }
//           }
//           bucket[j][k + 1] = temp;
//         } else {
//           bucket[j].push(temp);
//         }
//       }
//     }
//   }

//   for (let i = 0; i < bucketCount; i++) {
//     if (bucket[i]) {
//       k = bucket[i].length;
//       for (j = 0; j < k; j++) {
//         result.push(bucket[i][j]);
//       }
//     }
//   }
//   return result;
// }

/**
 * 计数排序
 */
// function countingSort(array) {
//   if (array.length <= 1) {
//     return;
//   }

//   let max = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (max < a[i]) {
//       max = a[i];
//     }
//   }

//   let c = [];
//   for (let i = 0; i <= max; i++) {
//     c[i] = 0
//   }

//   for (let i = 0; i < array.length; i++) {
//     c[array[i]]++;
//   }

//   for (let i = 1; i <= max; i++) {
//     c[i] = c[i - 1] + c[i];
//   }

//   let res = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     let index = c[array[i]] - 1
//     res[index] = array[i];
//     c[array[i]]--;
//   }

//   for (let i = 0; i < array.length; i++) {
//     a[i] = res[i]
//   }

//   return res;
// }

/**
 * 基数排序
 */

function radixSort(array) {
  var bucket = [], l = array.length, max = array[0];

  for (let i = 0; i < l; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  let loop = (max + '').length;

  for (let i = 0; i < 10; i++) {
    bucket[i] = [];
  }

  for (let i = 0; i < loop; i++) {
    for (let j = 0; j < l; j++) {
      let str = array[j] + '';
      if (str.length >= i + 1) {
        k = parseInt(str[str.length - i - 1]);
        bucket[k].push(array[j]);
      } else {
        bucket[0].push(array[j])
      }
    }
    console.log(bucket);
    array.splice(0, l);
    for (let j = 0; j < 10; j++) {
      let t = bucket[j].length;
      for (let k = 0; k < t; k++) {
        array.push(bucket[j][k])
      }
      bucket[j] = [];
    }
  }
  return array;
}

let a = [36, 9, 0, 25, 1, 49, 64, 16, 81, 4]
console.log(radixSort(a))