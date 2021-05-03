// Add your functions here
function map(a, f){
    let arr = [];
    for (let i = 0; i < a.length; i++){
        let v = a[i];
        arr.push(f(v));
    }
    return arr;
}

function reduce(a, f, s){
    let v = s ? s : a[0];
    for (let i = s ? 0 : 1; i < a.length; i++){
        v = f(a[i], v);
    }
    return v;
}
