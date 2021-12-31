/**
 * 
 * 1) Modificare l'esercizio libreria 
 * affinché la libreria venga visualizzata su una tabella, dove ogni riga corrisponde ad un libro.
    Ogni libro dovrà avere le seguenti informazioni:
    1. nome (text)
    2. autore (text)
    3. Data di uscita del libro (non anno)
    4. Numero di pagine totali del libro (integer)
-    RICERCA: sopra la tabella deve essere presente un input type text ed un bottone "cerca". 
Al click del bottone devono essere cercati tutti i libri dell'autore scritto sulla text. 
Le righe dei libri trovati devono essere colorate di verde (potete ridisegnare la tabella). 
Attenzione, il nome dell'autore potrebbe essere incompleto, ad esempio ricerca per nome e/o cognome

INSERIMENTO: creare una form per inserire un nuovo libro. 
1. controllare che tutti i campi siano stati inseriti e che abbiano dei valori corretti.
2. Il nuovo libro correttamente inserito deve essere visualizzato sulla tabella 
    (potete ridisegnare la tabella).

-   CANCELLA: creare una form per eliminare un libro.
1. Il libro può essere cancellato solo se vengono selezionati il nome e l'autore del libro.
2. Se uno dei due campi non è settato allora deve apparire un alert di avviso (potete ridisegnare la tabella).

 */

var libreria = [
    new libro("Promessi sposi", "Manzoni", true, "1287-01-01", [[1, 4], [2, 3]]),
    new libro("Amore ti trova sempre", "Sole", false, "2021-01-01", [[1, 10], [2, 7]]),
    new libro("Insensata modernità", "Pasolini", true, "2014-01-01", [[1, 7], [2, 8]]),
    new libro("Pasolini2", "Pasolini", true, "2014-01-01", [[1, 7], [2, 8]]),
    new libro("Il giro del mondo in 80 giorni ", "Verne", false, "1991-01-01", [[1, 4], [2, 5]])
]

function libro(nome, autore, letto, anno, capitoli) {
    this.nome = nome;
    this.autore = autore;
    this.letto = letto;
    this.anno = anno;
    this.capitoli = capitoli;
    this.stampaCopertina = function () { console.log(this.nome + " " + this.autore + " " + this.dataDiPubblicazione); }
    this.stampaPagineCapitoli = function () {
        console.log("Il libro " + this.nome);
        for (let i = 0; i < this.capitoli.length; i++) {
            console.log(" ha al capitolo " + this.capitoli[i][0] + " pagine " + this.capitoli[i][1]);
        }
    }
    this.stampaAnno = function () {
        console.log("Anno di pubblicazione " + this.anno);
    }
    this.stampaPagineTotali = function () {
        let countPagine = 0;
        for (let i = 0; i < this.capitoli.length; i++) {
            countPagine = countPagine + this.capitoli[i][1];
        }
        return countPagine;
    }
}

var libreriaJSON = JSON.stringify(libreria);

console.log()


function creaTabella() {
    var rigaLibro = "";
    for (const l of libreria) {

        rigaLibro += '<tr><td scope="row">' + l.nome + '</td><td>' + l.autore + '</td><td>' + l.anno + '</td><td>' + l.stampaPagineTotali() + '</td></tr>';
    }
    document.getElementById("libreria").innerHTML = rigaLibro;
}
creaTabella();


function cerca() {
    var ricercaAutore = document.getElementById("search").value;
    //var newArrLibro = [];
    if (ricercaAutore != "") {
        for (const l of libreria) {
            //ricercaAutore=ricercaAutore.trim();
            if (l.autore == ricercaAutore) {
             //   newArrLibro.push(l);
            }
        }
        rigaLibro = "";
        for (const l of libreria) {
            if (l.autore == ricercaAutore) {
                rigaLibro += "<tr bgcolor="+"#66ff00><td>" + l.nome + "</td><td>" + l.autore + "</td><td>" + l.anno + "</td><td>" + l.stampaPagineTotali() + "</td></tr>";
            } else{
                rigaLibro += "<tr><td>" + l.nome + "</td><td>" + l.autore + "</td><td>" + l.anno + "</td><td>" + l.stampaPagineTotali() + "</td></tr>";
            }
        }
        document.getElementById("libreria").innerHTML = rigaLibro;
    } //else {
      //  var rigaLibro = "";
      //  for (const l of libreria) {

      //      rigaLibro += "<tr><td>" + l.nome + "</td><td>" + l.autore + "</td><td>" + l.anno + "</td><td>" + l.stampaPagineTotali() + "</td></tr>";
      //  }
      //  document.getElementById("libreria").innerHTML = rigaLibro;
    //}
}



function inserisciLibro() {
    var nome = document.getElementById("nome").value;
    var autore = document.getElementById("autore").value;
    var data = document.getElementById("dataDiPubblicazione").value;
    var pagine = document.getElementById("pagine").value;
    var nuovoLibro = new libro(nome, autore, false, data, [[1, 20], [2, 50]]);
    libreria.push(nuovoLibro);
    creaTabella();
    console.log(nuovoLibro);
    console.log(libreria)
}

function cancelLibro(){
    //console.log("Cancella Libro")
    let nome = document.getElementById("textNome").value;
    //let autore =    document.getElementById("textAutore").value;

    //console.log(nome+" "+autore);

    
    var indice = 0;
    
    //console.log(indice);
    //libreria.splice(indice,1);
    for( const l of libreria){ 
        if ( l.nome==nome) {
            libreria.splice(indice,1); 
            
        } 
        
        if(l.autore==autore){
            libreria.splice(indice,1);
            
        }
        indice++;
        
     }
//     for(var i = 0; i < libreria.length; i++) {
//        console.log(libreria[i].nome);
//        if(libreria[i].nome == nome && libreria[i].autore == autore){
//            libreria.splice(i, 1);
//            break;
//        }
//    }
    creaTabella();
    var rigaLibro = "";
    for (const l of libreria) {
        rigaLibro += "<tr><td>" + l.nome + "</td><td>" + l.autore + "</td><td>" + l.anno + "</td><td>" + l.stampaPagineTotali() + "</td></tr>";
    }
    document.getElementById("libreria").innerHTML = rigaLibro;
}