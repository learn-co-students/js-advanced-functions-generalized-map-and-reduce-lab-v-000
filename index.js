// Add your functions here

function map(sourceArray, callbackFunction) {
    let result = []

    for (let index = 0; index < sourceArray.length; index++) {
        let elementForCbFunction = sourceArray[index]
        result.push(callbackFunction(elementForCbFunction))
    }
    return result
}

function reduce(sourceArray, callbackFunction, startingValue) {
    let result = (!!startingValue) ? startingValue : sourceArray[0]
    let index = (!!startingValue) ? 0 : 1

    for (;index < sourceArray.length; index++) {
        result = callbackFunction(sourceArray[index], result)
    }
    return result
}

