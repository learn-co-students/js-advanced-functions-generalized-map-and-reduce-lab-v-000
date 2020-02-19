function map(array, math) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    let arrayPosition = array[i]
    newArray.push(math(arrayPosition))
  }
  return newArray;
}


// Ask about this solution in study group
function reduce(array, cb, starting){
  let r = (starting) ? starting : array[0]
  let i = (starting) ? 0 : 1

  for (; i < array.length; i++) {
    r = cb(array[i], r)
  }

  return r;
}
