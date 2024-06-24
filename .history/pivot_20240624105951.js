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

let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

pivot(arr1); // 3
pivot(arr2); // 4

arr1.slice(0, 3).sort;
//
