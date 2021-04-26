// Add your functions here
function map(sourceArray, fn) {
  const mappedArray = [];
  for (const element of sourceArray) {
    mappedArray.push(fn(element))
  }
  return mappedArray;
}

function reduce(sourceArray, fn, startPoint) {
  if (startPoint) {
    let memo = startPoint;
    for (const e of sourceArray) {
      memo = fn(e, memo)
    }
  return memo;
  }
  else {
    let memo = sourceArray[0];
    for (const e of sourceArray.slice(1)) {
      memo = fn(e, memo)
    }
    return memo;
  }
}