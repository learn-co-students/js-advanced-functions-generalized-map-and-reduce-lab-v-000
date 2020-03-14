


function map(sourceArray, func) {
    let arr = []
    for (let i = 0; i < sourceArray.length; ++i) {
        arr.push(func(sourceArray[i]))
    }
    return arr
}