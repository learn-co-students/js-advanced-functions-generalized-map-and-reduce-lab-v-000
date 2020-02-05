// Add your functions here

// take an  array and a fn as args

//map, returns a new array
function map(srcArr, cb) {
  let newArr = []
  for (let i = 0; i < srcArr.length; i++) {
    let element = srcArr[i]
  newArr.push(cb(element))
  }
  return newArr
}

//returns a value
function reduce(srcArr, cb, starter) {
  let x = (!!starter) ? starter : srcArr[0]
  let i = (!!starter) ? 0 : 1

  for (; i < srcArr.length; i++) {
    x = cb(srcArr[i], x)
  }

  return x;
}
