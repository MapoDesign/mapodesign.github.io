function range(start,end) {
    let array=[];
    if(start<end){
        for(let i=start; i<=end ; i++){
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    let sumArr = 0;
    for (let i = 0; i < array.length; i++) {
        sumArr+=array[i];
    }

    return sumArr;
}



function start() {
    let a = Number(document.getElementById("firstSum").value);
    let b = Number(document.getElementById("secondSum").value);

    return document.getElementById("sum").innerHTML = 'La somma del range che hai inserito è: ' + sum(range(a,b));
    
}

