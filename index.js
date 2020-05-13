// Add your functions here

function map(src, pFunction){
    let emptyArray = []

    for (let i = 0; i < src.length; i++) {
        emptyArray.push(pFunction(src[i])) 
    }
    return emptyArray
}

function reduce(src, pFunction, startingValue) {
    let calcValue = (!!startingValue) ? startingValue : src[0]
    let i = (!!startingValue) ? 0 : 1

    for (; i < src.length; i++) {
        calcValue = pFunction(src[i], calcValue)
    }

    return calcValue;
};