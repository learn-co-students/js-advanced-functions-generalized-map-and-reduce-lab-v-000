// Add your functions here
function map(array, fcn) {
  let new_array = [];

  for (const e of array) {
    new_array.push(fcn(e));
  }

  return new_array;
}

function reduce(array, fcn, i = 0) {
  let new_value = i;

  // reduce returns true when all values are true
  if (typeof fcn(true, true) == 'boolean') {
    new_value = true;
  }

  for (const e of array) {
    new_value = fcn(new_value, e);
  }

  return new_value;
}
