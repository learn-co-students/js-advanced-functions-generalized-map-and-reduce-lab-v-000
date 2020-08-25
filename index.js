// Your code here
function mapToNegativize(sourceArray){
  let newArray = []
  sourceArray.forEach(function(value){
    newArray.push(value * -1)
  })
  return newArray
}
function mapToNoChange(sourceArray){
  return sourceArray
}
function mapToDouble(sourceArray){
  let newArray = []
  sourceArray.forEach(function(value){
    newArray.push(value * 2)
  })
  return newArray
}
function mapToSquare(sourceArray){
  let newArray = []
  sourceArray.forEach(function(value){
    newArray.push(value * value)
  })
  return newArray
}


function map(ary, funct){
  return funct(ary)
}





function reduce(){

}


function reduceToTotal(sourceArray, startingPoint = 0){
  let int = startingPoint
  sourceArray.forEach(function(value){
    int += value
  })
  return int
}
function reduceToAllTrue(sourceArray){
  let returnValue = true
  sourceArray.forEach(function(value){
    if (value == false){
      returnValue = false
    }
  })
  return returnValue
}
function reduceToAnyTrue(sourceArray){
  let returnValue = false
  sourceArray.forEach(function(value){
    if (value == true){
      returnValue = true
    }
  })
  return returnValue
}
