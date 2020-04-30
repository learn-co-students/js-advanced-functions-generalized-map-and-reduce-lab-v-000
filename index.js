// Add your functions here
function map(sourceArray, fn) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    let theElement = sourceArray[i]
    newArray.push(fn(theElement))
  }
  return newArray
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
