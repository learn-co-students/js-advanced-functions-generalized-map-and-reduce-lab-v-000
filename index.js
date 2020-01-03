// Add your functions here

function map(originalArray, callBackFunction) {
  let myNewArray = []

  for (let i = 0; i < originalArray.length; i++) {
    let theElement = originalArray[i]
    myNewArray.push(callBackFunction(theElement))
  }

  return myNewArray;
}

function reduce(originalArray, callBackFunction, startPoint){
  let output = (!!startPoint) ? startPoint : originalArray[0]
  let i = (!!startPoint) ? 0 : 1

  for (; i < originalArray.length; i++) {
    output = callBackFunction(originalArray[i], output)
  }

  return output;
}
