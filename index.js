// Add your functions here


function map(arr, callback) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i]
    newArr.push(callback(el))
  }
  return newArr;
}

function reduce(arr, callback, start) {
  let result = (!!start) ? start : arr[0];
  let i = (!!start) ? 0 : 1;
  for(; i < arr.length; i++) {
    result = callback(arr[i], result);
  }
  return result;

}
