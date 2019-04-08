function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(arr1, arr2) {
  let sorted = []
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(findMinAndRemoveSorted(arr1))
    }
    else {
      sorted.push(findMinAndRemoveSorted(arr2))
    }
  }
  return sorted.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
  let mid = arr.length / 2
  let h1 = arr.slice(0, mid)
  let h2 = arr.slice(mid, arr.length)
  if (arr.length < 2) {
    return arr
  }
  else {
    return merge(mergeSort(h1), mergeSort(h2))
  }
}
