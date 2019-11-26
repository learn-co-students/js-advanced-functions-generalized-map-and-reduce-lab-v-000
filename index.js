// Add your functions here

function map(array,fx){
  var newArray = []
  var i
  for(i=0; i < array.length; i++){
    newArray.push(fx(array[i]))
  }
  return newArray
}

function reduce(array,fx,startingPoint=undefined){
  var i
  if (startingPoint){
      var total = startingPoint
      i = 0
  }
  else{
    var total = array[0]
    i = 1
  }
  for(i; i < array.length; i++){
    total = fx(array[i],total)
    //reducing the array, take one of those numbers and add it together.
    // callbackfunction - going into argument
    // allowing the function to do all the work. 
  }
  return total
  }
