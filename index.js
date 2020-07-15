function map(ary, cb){
  const new_ary = []
  ary.forEach(elem=>new_ary.push(cb(elem)));
  return new_ary;
}
