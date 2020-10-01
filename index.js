function map(value, callback) {
    let a = []
    for (let i = 0; i < value.length; i++) {
        let element = value[i]
        a.push(callback(element))
    }
    return a
}

function reduce(value, callback, startingAmount) {
    let a = (!!startingAmount) ? startingAmount : value[0]
    let i = (!!startingAmount) ? 0 : 1

    for (; i < value.length; i++) {
        a = callback(value[i], a)
    }
    return a
}

// function map(src, cb) {
//     let r = []
//     for (let i = 0; i < src.length; i++) {
//         let theElement = src[i]
//         r.push(cb(theElement))
//     }
//     return r;
// }

// function reduce(src, cb, starting) {
//     let r = (!!starting) ? starting : src[0]
//     let i = (!!starting) ? 0 : 1

//     for (; i < src.length; i++) {
//         r = cb(src[i], r)
//     }

//     return r;
// }