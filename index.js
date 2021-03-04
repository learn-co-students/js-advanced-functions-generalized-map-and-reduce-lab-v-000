function map(array, fn) {
    let newArray = [];
    for (const element of array) {
      newArray.push(fn(element));
    }
    return newArray;
  }
  
  
  function reduce(array, fn, startingPoint = 0) {
    let total;
    let counter;
  
    if (!!startingPoint) {
      total = startingPoint;
      counter = 0;
    } else {
      total = array[0];
      counter = 1;
    }
  
     for (let i = counter; i < array.length; i++) {
       total = fn(total, array[i])
     }
    return total
  }