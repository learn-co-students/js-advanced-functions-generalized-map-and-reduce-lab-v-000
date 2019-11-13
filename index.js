// Add your functions here
function map(sourceArray, workFunction) {
    let r = [];

    for (let i = 0; i < sourceArray.length; i++) {
        r.push(workFunction(sourceArray[i]))
    }
    return r;
}

function reduce(sourceArray, workFunction, startingPoint) {
    
    let r = (!!startingPoint) ? startingPoint : sourceArray[0] // if given a startPoint, the return value begins with that, 
    // if not aggregate starting with the value of first element of the array as the startPoint.
    let i = (!!startingPoint) ? 0 : 1 // if given a startPoint, then start the iteration at the first element,
    // if not, then start the iteration at the second element of the array. 

    for (; i < sourceArray.length; i++) {
        r = workFunction(sourceArray[i], r)
    }
    return r;
}