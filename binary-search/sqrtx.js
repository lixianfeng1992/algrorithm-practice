/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0, right = ((x / 2) | 0) + 1; 

  while (left < right) {
    let mid = (left + right + 1) >> 1;
    let square = mid * mid;
    if (square > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return left;
};

console.log(mySqrt(8))