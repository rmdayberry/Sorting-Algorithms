function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midpoint));
  const right = mergeSort(arr.slice(midpoint));
  return merge(left, right);
}

//Test cases