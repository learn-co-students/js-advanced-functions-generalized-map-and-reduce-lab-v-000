// Add your functions here
const map = (src, callback) => {
  const newArr = []

  for (const e of src) {
    newArr.push(callback(e))
  }

  return newArr
}

const reduce = (src, callback, startingValue = 0) => {
  let reducedValue = (!!startingValue) ? startingValue : src[startingValue] 
  let i = (!!startingValue) ? 0 : 1

  for (i; i < src.length; i++) {
    reducedValue = callback(src[i], reducedValue)
  }

  return reducedValue
}