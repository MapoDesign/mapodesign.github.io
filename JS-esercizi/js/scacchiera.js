let tab = true;
let row = "";
let col = "";
let rowcont = 0;
let colcont = 0;
 
function scacchiera() {
    while (rowcont <= 8) {
        while (colcont <= 16){
            if (tab) {
                col += "#"
                tab = false;
            } else {
                col += " "
                tab = true;
            }
            colcont ++;
        }
        row = row + '<br/>'
        document.getElementById("scacchiera").innerHTML = row;
        rowcont ++;
        row += col;
        
    }
}

scacchiera();