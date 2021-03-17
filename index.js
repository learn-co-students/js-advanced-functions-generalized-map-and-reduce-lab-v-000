function map(array, callback) {
    let newArray = []
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i]
      newArray.push(callback(element))
    }
  
    return newArray;
  }
  
  function reduce(array, callback, startingPoint){
    let newArray = (!!startingPoint) ? startingPoint : array[0]
    let i = (!!startingPoint) ? 0 : 1
  
    for (; i < array.length; i++) {
      newArray = callback(array[i], newArray)
    }
  
    return newArray;
  }