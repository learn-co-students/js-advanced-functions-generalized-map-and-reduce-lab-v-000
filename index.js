// Add your functions here



function map(sourceArray, sourcefunc){
    let x = []
    for (let y of sourceArray){
        x.push(sourcefunc(y))
    }
    return x
};

function reduce(sourceArray, sourcefunc, startingvalue){
    let x = !!startingvalue ? startingvalue : sourceArray[0]
    let y = !!startingvalue ? 0 : 1

    for (; y < sourceArray.length; y++){
        x = sourcefunc(sourceArray[y], x)
    }
    return x
};