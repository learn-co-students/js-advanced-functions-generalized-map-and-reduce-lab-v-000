// Add your functions here
function map(sourceArray, fn){
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    let element = sourceArray[i]
    newArray.push(fn(element))
  }
  return newArray
};

function reduce(sourceArray, fn, start){
  if (start) {
      let total = start
      for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        total = fn(total, element)
      }
      return total
  }
  else {
      let total = sourceArray[0]
      for (let i = 1; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        total = fn(total, element)
      }
      return total
  }

};


