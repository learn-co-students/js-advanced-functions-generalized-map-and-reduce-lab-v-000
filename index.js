// Add your functions here

function map(arr,fn){
  return arr.map(x => fn(x))
}

// let arr = [1,2,3]
// let start = 100

function reduce(arr,fn, start){
  let result = start || arr[0]
   !!start ? null : arr.shift()
   for (const x of arr){ result = fn(x, result)}
   return result
}






//   function reduce(arr, fn, start) {
//     let result = start || arr[0]
//     !!start ? null : arr.shift()
//     for (const x of arr){ result = fn(x, result)}
//     return result
// }



// function reduceToTotal(arr, start = 0){
//   return arr.reduce(function(start, current){
//     return start + current
//   }, start)
