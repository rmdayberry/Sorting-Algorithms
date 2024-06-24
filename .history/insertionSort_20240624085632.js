function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

//Test cases
insertionSort([4, 20, 12, 10, 7, 9]);
//[4, 7, 9, 10, 12, 20]
insertionSort([0, -10, 7, 4]);
// [-10, 0, 4, 7]
insertionSort([1, 2, 3]);
//[1, 2, 3]
insertionSort([]);
//[]
