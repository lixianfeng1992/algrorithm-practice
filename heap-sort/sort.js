class Heap {
  constructor(capacity) {
    this.a = new Array(capacity);
    this.n = capacity;
    this.count = 0;
  }

  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  insert(data) {
    this.count += 1;
    this.a[this.count] = data;
    let i = this.count;
    while ((i / 2 | 0) > 0 && this.a[i] > this.a[(i / 2 | 0)]) {
      this.swap(this.a, i, (i / 2 | 0));
      i = (i / 2 | 0);
    }
  }
}

var findKthLargest = function(nums, k) {
    
};