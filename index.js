// Add your functions here
// map returns an array with all values made negative, the original values, 
// the original values multiplied by 2, the original values squared
let map = function(src, callback) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(callback(src[i])) // unique work
    }
            return r
} 

// reduce returns a running total when not given a starting point, 
// returns a running total when given a starting point,
// returns true when all values are true, returns false when any value is false,
// returns true when a true value is present andr eturns false when no true value is present.
let reduce = function(src, callback, startingPoint) {
    // initialize variable
    let runningTotal 
    // set i = 0
    let i = 0
    // if there is a startingPoint value
    if (startingPoint) {
        // set runningTotal to startingPoint
        runningTotal = startingPoint
    } else {
        // If no startingPoint set stratingPoint = 0 index position
        runningTotal = src[0]
        // set i = 1 index poistion so we do NOT double count the 0 index position
        i = 1
    }
        // Use i as the counter that is ALREADY SET in if/else statement above
        for ( i; i < src.length; i++ ) {
            // setting runningTotal to callback(array[index position], accumalator)
            runningTotal = callback(src[i], runningTotal)   
    }
    return runningTotal
}