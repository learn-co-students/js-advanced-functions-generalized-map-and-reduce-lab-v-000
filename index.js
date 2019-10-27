// Add your functions here
function map(arr, fn) {
  let newArr = [];
  arr.forEach(elem => {
    newArr.push(fn(elem));
  });
  return newArr;
}

function reduce(arr, fn, start) {
  let a = !!start ? start : arr[0];
  let i = !!start ? 0 : 1;
  for (i; i < arr.length; i++) {
    a = fn(a, arr[i]);
  };
  return a;
}
