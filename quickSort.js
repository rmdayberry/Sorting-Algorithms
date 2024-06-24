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

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // Get the pivot index
    // Recursively apply quickSort to the left and right subarrays
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

//Test cases:
quickSort([4, 20, 12, 10, 7, 9]);
//[4, 7, 9, 10, 12, 20]
quickSort([0, -10, 7, 4]);
//[-10, 0, 4, 7]
quickSort([1, 2, 3]);
// [1, 2, 3]
quickSort([]);
//[]
let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];

quickSort(nums);
//[2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
