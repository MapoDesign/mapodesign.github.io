function isEven() {
    let n = document.getElementById("n").value;
    n = Number(n);
    let stamp;

    if (n == 0 || (n-2)%2==0) {
        stamp = true;
    } else if (n == 1 || (n-2)%2!=0) {
        stamp = false;
    } else {
        stamp = "valore non valido";
    }

    if (stamp) {
        document.getElementById("even").innerHTML = "Il numero è pari";
    } else {
        document.getElementById("even").innerHTML = "Il numero è dispari";
    }
}