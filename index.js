function map(sourceArray, func){
  let result = [];
  for (let i=0; i < sourceArray.length; i++){
    let el = sourceArray[i];
    result.push(func(el));
  }
  return result
}

// function reduceToAllTrue(sourceArray){
//   for (let i =0; i < sourceArray.length; i++){
//    if (!sourceArray[i])
//    return false
//   }
//     return true
// }

function reduce(sourceArray, func, startingPoint=0){
  let result = startingPoint;

  for (let i = 0; i < sourceArray.length; i++) {
    result = func(sourceArray[i], result)
    }
  return result
}
