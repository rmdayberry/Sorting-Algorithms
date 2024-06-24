function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

//Test cases:
selectionSort([4, 20, 12, 10, 7, 9]);
//[4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]);
//
