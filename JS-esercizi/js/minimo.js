function min() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;

    let m;
    if (a<b) {
        m = a;
    } else if (a>b) {
        m = b;
    } else if (a==b){
        m = "I numeri sono uguali";
    } else {
        m = "Parametro non corretto";
    }

    document.getElementById("minimo").innerHTML = m;
}