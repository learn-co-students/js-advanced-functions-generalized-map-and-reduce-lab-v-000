// Add your functions here
function map(src, cb){
    let array = []
    for(let i=0; i < src.length; i++){
        array.push(cb(src[i]))
    }
    return array
}

function reduce(src, cb, start){
    if(start){
        let total = start
        for(let i=0; i < src.length; i++){
            total = cb(total, src[i])
        }
        return total
    }
    else{
        let total = src[0]
        for(let i=1; i < src.length; i++){
            total = cb(total, src[i])
        }
        return total
    }
}