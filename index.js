// Add your functions here
// 1) map returns an array with all values made negative
// array.map([1, 2, 3, -9], function (a) { return a * a })

// array.map(function (a) {
//     return -1 * a[i];
// }); //=> [20, 40, 60, 80]

// let array = [1, 2, 3, -9]

// [1, 2, 3, -9].map(function (a) {
//      return -1 * a;
// });

// let x = map([1, 2, 3, -9], function (a) { return -1 * a })

function map(src, cb) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        let theElement = src[i]
        r.push(cb(theElement))
    }
    return r;
}

function reduce(src, cb, starting) {
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1

    for (; i < src.length; i++) {
        r = cb(src[i], r)
    }

    return r;
}