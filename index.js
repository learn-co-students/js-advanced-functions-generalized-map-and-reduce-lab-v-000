// Add your functions here
function map(array, someFunc){
  let newArr = []
  for(let i = 0; i < array.length; i++){
    let el = array[i]
    newArr.push(someFunc(el))
  }
  return newArr;
}


function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
