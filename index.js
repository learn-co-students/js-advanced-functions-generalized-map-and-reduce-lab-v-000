// Your code here
function map(ary, funct){
  let ans = []
  ary.forEach(function(value){
    ans.push(funct(value))
  })
  return ans
}

function reduce(ary, funct, start = 0){
  ary.forEach(function(value){
    start = funct(start, value)
  })
  return start
}
