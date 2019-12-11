function map(arr, fn) {
  let newarr = [];
  for (const ele of arr) {
    let n = fn(ele);
    newarr.push(n);
  }
  return newarr;
}

function reduce(arr, fn, int=0) {
  let newval = int;

  if (typeof fn(true, true) == 'boolean') {
    newval = true;
  }

  for (const ele of arr) {
    newval = fn(newval, ele);
  }

  return newval;
}
