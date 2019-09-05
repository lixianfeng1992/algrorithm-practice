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

