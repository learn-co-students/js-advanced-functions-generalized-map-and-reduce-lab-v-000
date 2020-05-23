// Add your functions here

// map([1, 2, 3, -9], function(a){ return a * a }) 
//function map(sourceArray, fn(sourceArray){return (-1 * sourceArray)})
// function map(sourceArray), function(sourceArray){return (-1 * sourceArray)}
// function map(sourceArray), function(src){return (-1 * src)}

// map returns an array with all values made negative
// function map(sourceArray) {
//     // Set negativize to an empty array
//     let negativize = []
//     // iterate/loop over sourceArray
//     for (let i = 0; i < sourceArray.length; i++) {
//         // with all values made negative
//         negativize.push(sourceArray[i] * -1)
//     }
//     // returns an array 
//     return negativize
// }

// 
// expect a source array and a function.
// function map(sourceArray, function(negativize="") {
//     function map(sourceArray, fn(negativize="") {
// // functionUsingCallback(sayHello, sayHola, function(name="") {
//     // All the tests will pass an Array and a block
//     for (let i = 0; i < sourceArray.length; i++) {
//         // iterate/loop over sourceArray
//         // with all values made negative
//         negativize.push(sourceArray[i] * -1)
//     }    
//     // returns an array 
//      return negativize
// })

// let sayHola = function(name="") {
let negativize = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        negativize.push(sourceArray[i] * -1)
    }   
    return negativize
}

