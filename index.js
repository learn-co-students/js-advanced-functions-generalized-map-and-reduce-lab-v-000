function map(ary, cb){
  const new_ary = []
  ary.forEach(elem => new_ary.push(cb(elem)));
  return new_ary;
}

function reduce(ary, cb, initialValue){
  const aryCopy = [...ary];
  let accu = (!!initialValue)?(accu = initialValue):(accu =aryCopy.shift());

  aryCopy.forEach(elem => accu = cb(elem, accu));
  return accu;
}
