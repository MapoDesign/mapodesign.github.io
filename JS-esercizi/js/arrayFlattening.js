function flattening(array) {
    array.reduce(concat, 0)
}

function concat(total,num) {
    total = total.concat(num);
    return array2;
}

let array = [[1, 2, 3], [4, 5], [6]];

console.log(array.reduce(function(flat,current) {
    return flat.concat(current);
},[]));