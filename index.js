// Add your functions here

function map(org, cb) {
    let arr = []

    for (let i = 0; i < org.length; i++) {
      let theElement = org[i]
      arr.push(cb(theElement))
    }

    return arr;
};

function reduce(org, cb, strt) {
    let arr = (!!strt) ? strt : org[0]
    let i = (!!strt) ? 0 : 1

    for (; i < org.length; i++) {
        arr = cb(org[i], arr)
    }

    return arr;
}