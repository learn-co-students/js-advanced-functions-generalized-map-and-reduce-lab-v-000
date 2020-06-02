function map(sourceArray, callback){
    let newArray = sourceArray.map(x => callback(x));
    return newArray;
}



function reduce(sourceArray, callback, startingPoint){
    let r = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1
  
    for (; i < sourceArray.length; i++) {
      r = callback(sourceArray[i], r)
    }
  
    return r;
  }