function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[start];
  let swap = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swap++;
      [arr[i], arr[swap]] = [arr[swap], arr[i]];
    }
  }
  [arr[start], arr[swap]] = [arr[swap], arr[start]];

  return swap;
}

//Test cases:
let arr = [4, 2, 5, 3, 6];
pivot(arr); // 2
arr; // [3, 2, 4, 5, 6]
