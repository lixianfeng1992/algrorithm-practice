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
    if (this.count >= this.n) {
      console.log('容量到达上限');
      return;
    }
    this.count += 1;
    this.a[this.count] = data;
    let i = this.count;
    while ((i / 2 | 0) > 0 && this.a[i] > this.a[(i / 2 | 0)]) {
      this.swap(this.a, i, (i / 2 | 0));
      i = (i / 2 | 0);
    }
  }
}

function createTest() {
  console.log('随机创建测试:')
  let i = 0
  let heap = new Heap(10);
  while (i <= 10) {
      const num = Math.floor(Math.random() * 100)
      heap.insert(num);
      console.log(heap)
      i++
  }
  
  // console.log(heap)
}

createTest();