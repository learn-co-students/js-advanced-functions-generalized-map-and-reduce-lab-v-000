const map = (array, fn) => {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push(fn(array[i]))
    }
    return new_array
}

const reduce = (array, fn, startingValue) => {
    let total 
    if (startingValue) {
        total = startingValue
        for (let i = 0; i < array.length; i++) {
            total = fn(array[i], total)
        }
        return total
    } else {
        total = array[0]
        for (let i = 1; i < array.length; i++) {
           total = fn(array[i], total)
        }
        return total
    }
}
 