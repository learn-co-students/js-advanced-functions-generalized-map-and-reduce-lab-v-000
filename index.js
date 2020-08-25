// Your code here
function map(ary, funct){
  let ans = []
  ary.forEach(function(value){
    ans.push(funct(value))
  })
  return ans
}

// function reduce(ary, funct, start){
//   if (start == undefined){
//     let ans = true
//     ary.forEach(function(value){
//       ans = funct(ans, value)
//     })
//     return ans
//   }
//   else {
//     ary.forEach(function(value){
//       start = funct(start, value)
//     })
//     return start
//   }
// }

function reduce(ary, funct, start = 0){
  ary.forEach(function(value){
    start = funct(start, value)
  })
  return start
}
