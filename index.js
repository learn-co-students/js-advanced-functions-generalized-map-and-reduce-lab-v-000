//
//

// function map(array, func(){
//   let r = []
//   for (let i = 0; i < array.length; i++ ) {
//     r.push(func(array))
//   }
//   return r
// }
// })
//
function map(array, func) {
  let arr2 = []
  for (let i = 0; i < array.length; i++) {
    arr2.push(func(array[i]))
  }
  return arr2
}


function reduce(array, startingPoint=0) {
  // let starter = startingPoint
  let arr2 = []
  for (let i = 0; i < array.length; i++) {
    arr2.push(startingPoint += (array[i]))
  }
  return arr2
}
//

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
} 

// where to put the paranetheses?
// function map(array, function) {
//
// }


// function map


// function map(array, function(a) {
//   return a * -1
// })
