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
