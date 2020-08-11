// Add your functions here

function map(array, block_function) {
  const newArray = []
  for (const item of array) {
    newArray.push(block_function(item))
  }
  return newArray
}

function reduce(array, block_function, start_value) {
  let total = (!!start_value) ? start_value : array[0]
  let i = (!!start_value) ? 0 : 1

  for(; i < array.length; i++) {
    total = block_function(array[i], total)
  }
  return total
}