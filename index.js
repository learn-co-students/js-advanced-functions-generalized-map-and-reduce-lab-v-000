


function map (sourceArray, func) {
    let arr = []
    for (let i = 0; i < sourceArray.length; ++i) {
        arr.push(func(sourceArray[i]))
    }
    return arr
}


function reduce(sourceArray, func, startingPoint) {
    let memo = sourceArray[0];
    for (let i = 1; i < sourceArray.length; ++i) {
        memo = func(sourceArray[i], memo)
    }
    return startingPoint ? memo += startingPoint : memo;
}