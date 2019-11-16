// Add your functions here

function map(array, callbackFunc) {
    let newArray = [];
    array.forEach(index => {
        newArray.push(callbackFunc(index));
    })
    return newArray;
}

function reduce(array, func, initialValue) {
    let i;
    let accumulator;

    if (!initialValue) {
        accumulator = array[0];
        i = 1;
    } else {
        accumulator = initialValue;
        i = 0;
    }
    for (i; i < array.length; i++) {
        accumulator = func(accumulator, array[i])
    }
    return accumulator;
}
