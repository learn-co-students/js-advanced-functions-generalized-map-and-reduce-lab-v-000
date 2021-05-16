function map(arr, callback){
  let newArr = []
  for (const i of arr){
    newArr.push(callback(i))
  }
  return newArr
}

function reduce(arr, callback, startValue){
  let total = (startValue) ? startValue : arr[0]
  let counter = (startValue) ? 0 : 1

  for (; counter < arr.length; counter++) {
    total = callback(arr[counter], total)
  }

  return total
}