// Add your functions here
function map(source, someFunction){
    let result = [];
    for(let i = 0; i < source.length; i++) {
        let element = source[i];
        result.push(someFunction(element));
    };
    return result;
}


function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }