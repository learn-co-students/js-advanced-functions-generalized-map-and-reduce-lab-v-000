function map(sourceArray, mapFunk) {
  let newArray = [];
  for (const el of sourceArray) {
    newArray.push(mapFunk(el));
  }
  return newArray;
};


function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
