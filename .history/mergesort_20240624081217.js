function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.splice(0, midpoint));
  const right = mergeSort(arr.splice(midpoint));
  return mergeSort(left, right);
}
