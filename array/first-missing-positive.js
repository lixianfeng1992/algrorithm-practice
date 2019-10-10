var firstMissingPositive = function(nums) {
  const len = nums.length;
  if (!len) {
    return 1;
  }

  if (len === 1) {
    if (nums[0] <= 0) {
      return 1;
    } else if (nums[0] === 1) {
      return 2;
    }

    return 1;
  }

  for (let i = 0; i < len; ++i) {
    if (nums[i] >= 1 && nums[i] <= len) {
      if (nums[i] !== nums[nums[i] - 1]) {
        const temp = nums[nums[i] - 1];
        nums[nums[i] - 1] = nums[i];
        nums[i] = temp;
        i = i - 1;
      }
    } else {
      nums[i] = undefined
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return len + 1;
};

console.log(firstMissingPositive([1, 2, 3]))