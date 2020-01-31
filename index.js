// Add your functions here
function map(src, fn){
    let r = []
    for (let i = 0; i < src.length; i++) {
        let j = src[i];
        r.push(fn(j))
    }
    return r
}

function reduce(src, fn, start){
    let i = !!start ? 0 : 1
    let g = !!start ? start : src[0]
    for (; i < src.length; i++){
        console.log("this is i", i)
        g = fn(src[i],g)
    }
    console.log("this is g", g)
    return g
}