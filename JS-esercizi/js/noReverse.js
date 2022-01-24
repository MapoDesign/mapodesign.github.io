

//let array = [4,3,2,5];
//let string = "Ciao";
//let array = string.split("");
//console.log(reverseArray(array));
//console.log(reverseArrayInPLace(array));


function reverseArray(array) {
    let array2 = [];

    for (let i = array.length-1; i >= 0 ; i--) {
        array2.push(array[i]); 
    }

    return array2;
}

function reverseArrayInPLace(array) {
    let temp = 0
    i=0;
    while (i < (array.length/2)) {
        temp = array[i];
        array[i] = array[array.length-i-1];
        console.log("array: " + array);
        console.log("temp: " + temp);
        array[array.length-i-1] = temp;
        i++;
    }
    
    return array;
}

function startReverse() {
    let a = document.getElementById("firstReverse").value;

    return document.getElementById("reverse").innerHTML = 'Inversione da secondo array: ' + reverseArray(a.split("")) 
    + '</br>Inversione usando uno spazio di memoria allocato: ' + reverseArray(a.split(""));
    
}