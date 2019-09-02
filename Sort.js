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
function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (let j = i; j >=0; j--) {
      if (array[j - 1] > temp) {
        array[j] = array[j - 1];
      } else {
        array[j] = temp;
        break;
      }
    }
  }
  return array;
}

let a = [3, 5, 1, 4, 2]
insertionSort(a, 5)
console.log(a)