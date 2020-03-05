function map(original, callBack){
    let newArray = []
    for(let i=0; i<original.length; i++){
        newArray.push(callBack(original[i]))
    }
    return newArray;
 }

 function reduce(original, callBack, startingPoint){ 
    let newValue = (!!startingPoint)? startingPoint : original[0]
    let i = (!!startingPoint)? 0 : 1
    for(; i<original.length; i++){
        newValue = callBack(original[i], newValue)
    }
    return newValue;
} 