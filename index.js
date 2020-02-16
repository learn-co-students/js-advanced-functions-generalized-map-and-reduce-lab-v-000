// Add your functions here
const map = (arr, f) => {
  let transform = [];
  for(const elem of arr){
    transform.push(f(elem));
  }
  return transform;
};