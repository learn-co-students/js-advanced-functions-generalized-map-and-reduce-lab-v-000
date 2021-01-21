// Add your functions here
function map(sourceArray, callback) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(callback(sourceArray[i]));
  }
  return result;
}

function reduce(sourceArray, callback, startValue) {
  let result = (!!startValue) ? startValue : sourceArray[0];
  let i = (!!startValue) ? 0 : 1;
  for (i; i < sourceArray.length; i++) {
    result = callback(sourceArray[i], result);
  }
  return result;
}
