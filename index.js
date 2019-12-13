// Add your functions here
function map(array, callBackFunc){
    let new_array = []
    for (let i = 0; i < array.length; i++) {
        let eachElement = array[i]
        new_array.push(callBackFunc(eachElement))
      }
    
      return new_array;
}

// function reduce(array, callBackFunc, startValue){

//     let originalValue = (!!startValue) ? startValue : array[0]
//     console.log("originalValue", originalValue)
        
//     for (let i = 0; i < array.length; i++) {
//         if(originalValue == array[0]){
//             i++
//         }
//         originalValue = callBackFunc(array[i], originalValue)
       
//     }
//     // console.log("returnvalue", originalValue)
//     return originalValue
// }

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }