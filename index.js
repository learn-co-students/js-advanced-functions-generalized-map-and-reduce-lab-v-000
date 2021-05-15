// Your code here
function map(ary, funct){
  let ans = []
  ary.forEach(function(value){
    ans.push(funct(value))
  })
  return ans
}

function reduce(ary, funct, start){
  if (start == undefined){
    let ans = ary[0]
    for(let i = 1; i < ary.length; i++){
      ans = funct(ans, ary[i])
    }
    return ans
  }
  else {
    ary.forEach(function(value){
      start = funct(start, value)
    })
    return start
  }
}
