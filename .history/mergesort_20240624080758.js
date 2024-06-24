const left = arr.splice(0, mid);
return ChannelMergerNode(mergeSort(left), mergeSort(arr));
