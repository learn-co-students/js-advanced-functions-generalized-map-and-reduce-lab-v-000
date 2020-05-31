// Add your functions here
//remember shift+option+f is to format

function map(valueArray, randomFunction) {
  //the function being passed in is for values, not the whole array.
  var newArray = []; //always remember to use const let or var
  //valueArray.forEach((element) => console.log(element));
  //valueArray.forEach(element => newArray.push(randomFunction(element)));
  valueArray.forEach((element) => {
    newArray.push(randomFunction(element));
  });
  //newArray.forEach((element) => console.log(element));
  return newArray;
}

function reduce(sourceArray, randomFunction, startingPoint = null) {
  //javascript doesn't care about the number of arguments - Benjamin Aschenbrenner
  //nil doesn't exist in js. like array[-1]
  //console.log(sourceArray);
  //console.log(randomFunction);
  //console.log(startingPoint);
  var newArray = [];

  let i;
  let total;
  if (startingPoint === null) {
    i = 1;
    total = sourceArray[0];
  } else {
    i = 0;
    total = startingPoint;
  }
  for (i; i < sourceArray.length; i++) {
    total = randomFunction(total,sourceArray[i]);
  }
  return total
}
