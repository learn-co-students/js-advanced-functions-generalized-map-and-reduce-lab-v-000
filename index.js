function map(array, f) {
    return loop(array, f);
}

function reduce(array, f, s) {
    return loopR(array, f, s)
}

function loop(array, f) {
    let r = []
    for (let i = 0; i < array.length; i++ ) {
        r.push(f(array[i]))
    }
    return r
}

function loopR(array, f, s) {
    let total = (!!s) ? s : array[0]
    let i = (!!s) ? 0 : 1
    for (; i<array.length; i++)  {
        total = f(array[i],total);
    }
    return total;
}