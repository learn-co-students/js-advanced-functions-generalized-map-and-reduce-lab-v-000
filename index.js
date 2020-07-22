function map(srcArr, fn) {
    let newArr = []
    for (let i = 0; i < srcArr.length; i++) {
      let element = srcArr[i]
    newArr.push(fn(element))
    }
    return newArr
  }
  
  function reduce(srcArr, fn, starter) {
    let x = (!!starter) ? starter : srcArr[0]
    let i = (!!starter) ? 0 : 1
  
    for(;i < srcArr.length; i++) {
      x = fn(srcArr[i], x)
    }
    return x;
  }