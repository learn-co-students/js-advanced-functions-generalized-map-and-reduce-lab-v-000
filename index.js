function map(array, someFunction) {
    let newArr = []
    for (const element of array) {
        newArr.push(someFunction(element))
    }
    return newArr
}

function reduce(array, someFunction, startingPoint) {
    let total = !!startingPoint ? startingPoint : array[0]
    let i = !!startingPoint ? 0 : 1

    for (i; i < array.length; i++) {
        total = someFunction(array[i], total)
    }
    return total
}

