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
