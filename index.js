// Add your functions here

// map([1, 2, 3, -9], function(a){ return a * a }) 

function map(sourceArray, pickFunction){

    let finalArray = []

    for (let i = 0; i < sourceArray.length; i++ ) {

        finalArray.push(pickFunction(sourceArray[i]))
      }

    return finalArray
};


    function reduce(sourceArray, pickFunction, startingValue){
        let calculatedValue = (!!startingValue) ? startingValue : sourceArray[0]
        let i = (!!startingValue) ? 0 : 1
      
        for (; i < sourceArray.length; i++ ) {
          calculatedValue = pickFunction(sourceArray[i], calculatedValue)
        }
      
        return calculatedValue;
      };

