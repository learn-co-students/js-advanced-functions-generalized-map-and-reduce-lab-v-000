// Add your functions here
function map (array, action) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(action(array[i]))
    }
    return newArray
}

function reduce (sourceArray, action, starting) {
    let r = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1

    for (; i < sourceArray.length; i++) {
        r = action(sourceArray[i], r)
    }

    return r;
}