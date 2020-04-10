function map(original, callBack){
    let arr = []
    for(let i=0; i< original.length; i++){
        arr.push(callBack(original[i]))
    }
    return arr;
 }

 function reduce(original, callBack, start){ 
    let val = (!!start) ? start : original[0]
    let i = (!!start)? 0 : 1
    for(; i < original.length; i++){
        val = callBack(original[i], val)
    }
    return val;
} 