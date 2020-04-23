// Add your functions here

function map(arrayValues, callBack){
    let newArray = []
    for (let i = 0; arrayValues.length > i; i++) {
        newArray.push(callBack(arrayValues[i]))
    }
    return newArray

}


function reduce(arrayValues, callBack, startPoint){
    let total
    let i
    if (!!startPoint) {
        total = startPoint
        i = 0
    }
    else {
        total = arrayValues[0]
        i = 1
    }
    for (; arrayValues.length > i; i++){
        total = callBack(arrayValues[i], total)
        
    }
    return total
}