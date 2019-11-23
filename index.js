// Add your functions here

function map(array,fx){
  var newArray = []
  var i
  for(i=0; i < array.length; i++){
    newArray.push(fx(array[i]))
  }
  return newArray
}

function reduce(array,fx,startingPoint){
  var newArray = []
  var i
  for(i=0; i < array.length; i++){
    if (startingPoint){
    newArray.push(fx(array[i]))
    //has to return a value
    }
  }
  return newArray
}
