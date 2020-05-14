// Add your functions here
function map(src, cb) {
    let r = []
  
    for (let i = 0; i < src.length; i++) {
      let theElement = src[i]
      r.push(cb(theElement))
    }
  
    return r;
  }
  
  function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }

// Tests passing:
//   my own map-like methods
//     map returns an array with all values made negative
//       ✓ transforms correctly
//       map returns an array with the original values
//         ✓ transforms correctly
//       map returns an array with the original values multiplied by 2
//         ✓ transforms correctly
//       map returns an array with the original values squared
//         ✓ transforms correctly

//   my own reduce-like methods
//     reduce returns a running total when not given a starting point
//       ✓ reduces correctly
//     reduce returns a running total when given a starting point
//       ✓ reduces correctly
//     reduce returns true when all values are true
//       ✓ reduces correctly
//     reduce returns false when any value is false
//       ✓ reduces correctly
//     reduce returns true when a true value is present
//       ✓ reduces correctly
//     reduce returns false when no true value is present
//       ✓ reduces correctly