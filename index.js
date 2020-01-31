// Add your functions here
function map(arr, fn) {
    let newArray = [];
    arr.forEach(el => {
        newArray.push(fn(el));
    })
    return newArray;
}

function reduce(arr, fn, init = null) {
    let agg = init;
    let i;
    if (agg) {
        i = 0;
    } else {
        i = 1;
        agg = arr[0];
    }
    while (i < arr.length) {
        agg = fn(agg, arr[i]);
        i++;
    }
    return agg;
}