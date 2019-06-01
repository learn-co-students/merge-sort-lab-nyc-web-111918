function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(first, second){
  let sorted=[]
  while(first.length !== 0 && second.length !==0){
    if(first[0]<second[0]){
      sorted.push(findMinAndRemoveSorted(first))
    }else{
      sorted.push(findMinAndRemoveSorted(second))
    }
  }
  return sorted.concat(first).concat(second)
}

function mergeSort(array){
  let mid = array.length/2
  let firstHalf = array.slice(0, mid)
  let secondHalf = array.slice(mid, array.length)

  if(array.length < 2){
    return array
  }else{
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
