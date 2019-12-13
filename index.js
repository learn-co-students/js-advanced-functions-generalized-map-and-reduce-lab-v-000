// Add your functions here
function map(array, callBackFunc){
    let new_array = []
    for (let i = 0; i < array.length; i++) {
        let eachElement = array[i]
        new_array.push(callBackFunc(eachElement))
      }
    
      return new_array;
}

function reduce(array, callBackFunc, startValue){

    let originalValue = null;

    if(startValue == 0){
        originalValue = 0
    } else {
        originalValue = startValue
    }
        

    for (let i = 0; i < array.length; i++) {
        callBackFunc(array[i], originalValue)
    }
    
}