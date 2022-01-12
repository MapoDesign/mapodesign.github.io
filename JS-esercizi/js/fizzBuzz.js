num = "";

for (n=1 ; n <= 100 ; n++) {
    
    if (n%3==0) {num += "Fizz - "}
    else if (n%5==0) {num += "Buzz - "}
    else { num += n + " - ";}

    document.getElementById("fizzBuzz").innerHTML = num;
}