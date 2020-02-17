// Add your functions here
const map = (arr, f) => {
  let transform = [];
  for(const elem of arr){
    transform.push(f(elem));
  }
  return transform;
};

const reduce = (arr, f, startingPoint) => {
  let reducedValue = (!!startingPoint) ? startingPoint : arr[0];
  let i = (!!startingPoint) ? 0 : 1;

  for (; i < arr.length; i++) {
    reducedValue = f(arr[i], reducedValue);
  }

  return reducedValue;
};