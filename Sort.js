/**
 * 冒泡排序
 */
function bubbleSort(nums, n) {
  if (n <= 1) {
    return;
  }

  for (let i = 0; i < n; i++) {
    // 如果本次循环已经没有数据变化，提前结束
    let flag = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
        flag = true;
      }
    }
    if (!flag) break;
  }
}
let a = [3, 5, 1, 4, 2]
bubbleSort(a, 5)
console.log(a)