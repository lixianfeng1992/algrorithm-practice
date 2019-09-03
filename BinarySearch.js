function binarySearch(array, value) {
  let low = 0;
  let high = array.length - 1;

  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (a[mid] === value) {
      return mid;
    } else if (a[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}