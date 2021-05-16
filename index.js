// Add your functions here

// map-like methods
function map(sourceArray, func) {
    let returnArray = [];
    for (const item of sourceArray) {
        returnArray.push(func(item));
    }
    return returnArray;
};

// reduce-like methods
// I needed to review the solution for this one. 
// I really wanted to use for...of but the necessity of
// needing to account for either starting with the start
// or the first element of the array made me see why
// using a more classic loop is the most coherent
// way for it to work. Also, in my previous lab solution,
// I wrote different logic for a number of parts of my
// reduce functions, which is why I had so much trouble
// with this one on round 2. This logic makes complete
// sense to me and I'll continue to study it
function reduce(sourceArray, func, start) {
    let returnVal = (!!start) ? start : sourceArray[0];
    let i = (!!start) ? 0 : 1;
  
    for (; i < sourceArray.length; i++) {
      returnVal = func(sourceArray[i],returnVal)
    }
    return returnVal;
};