function cont() {
    let string = document.getElementById("string").value;
    string = String(string);

    let chart = contChat(string);
    let b = contBs(string);

    document.getElementById("cont").innerHTML = '"' + string + '"' + " ha " + chart + " caratteri con " + b + " B maiuscole";
}

function contChat(string) {
    let chart=0;
    for (const s in string) {
        chart++;
    }

    return chart;
}

function contBs(string) {
    let b=0;
    for (var i = 0; i < string.length; i++) {
        console.log(string[i])
        if (string[i]=="B") {
            b++;
        }
    }

    return b;
}