// Add your functions here

function map(sourceArray, callbackFn) {
  let newArray = [];

  for (const element of sourceArray) {
    newArray.push( callbackFn(element) );
  }

  return newArray;
}

function reduce(sourceArray, callbackFn, startingPoint) {
  // I don't think startingPoint needs a default value.
  // If I'm going to return true or false, then startingPoint should be initialized to true.
  // But if I'm working with numbers, then startingPoint needs to be initialized to 0, which is falsy.

  // If that startingPoint is undefined, then it either needs to be 0 or true/truthy.
  // If it IS defined, leave it alone.

  let returnValue;

  if (startingPoint) {
    returnValue = startingPoint;
  } else {
    returnValue = 0;
  }

  for (const elem of sourceArray) {
    returnValue = callbackFn(elem, returnValue);
  }

  return returnValue;
}