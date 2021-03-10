// Add your functions here
function map(array, func) {
  const collection = []
  for (const item of array) {
    const result = func(item)
    if (Boolean(result)) {
      collection.push(result)
    }
  }
  return collection
}

// does not work will memo = null
// sourceArray = [1, 2, true, "razmatazz"]
// reduce(sourceArray, function (a, memo) { 
//   return !!a && !!memo 
// })

// This works with memo = null
// sourceArray = [1, 2, 3]
// reduce(sourceArray, function (e, memo) {
//   return e + memo 
// })

function reduce(array, func, startingPoint=null) {
  let memo = array[0];

  (startingPoint) ? memo = startingPoint : null

  for (let i = 0; i < array.length; i++) {
    // first iteration
    // sourceArray = [1, 2, 3]
    // memo = 1; func = 1 + memo
    const item = array[i];
    let result = func(item, memo)

    if (i === 0 && typeof(result) === 'number' && !startingPoint) {

      result = func(item, 0)
    }
    memo = result

  }
  return memo;
}
// function reduce(array, func, startingPoint = null) {
//   let memo = startingPoint;

//   for (let i = 1; i < array.length; i++) {
//     const item = array[i];
//     const result = func(item, memo)
//     memo = result
//   }
//   return memo;
// }