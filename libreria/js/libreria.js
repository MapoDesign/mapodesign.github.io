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

let library=[
    new book('I Promessi Sposi','Manzoni',true,1827,[[1, 4], [2, 3]]),
    new book('Harry Potter','Rowling',true,[[1, 4], [2, 3]]),
    new book('La tua seconda vita comincia quando capisci di averne una sola', true,'Raphaell Giordano',2015,[[1, 4], [2, 3]]),
    new book('La vita è come una medusa non puoi prenderla a badilate','Guy Browning',true,2004,[[1, 4], [2, 3]]),
    new book('La Divina Commedia','Dante Alighieri',true,1472,[[1, 4], [2, 3]]),
    new book("Promessi sposi", "Manzoni", true, 1287, [[1, 4], [2, 3]]),
    new book("Amore ti trova sempre", "Sole", false, 2021, [[1, 10], [2, 7]]),
    new book("Insensata modernità", "Pasolini", true, 2014, [[1, 7], [2, 8]]),
    new book("Pasolini2", "Pasolini", true, 2014, [[1, 7], [2, 8]]),
    new book("Il giro del mondo in 80 giorni ", "Verne", false, 1991-01-01, [[1, 4], [2, 5]])
]

function book(title,author,read,year,pages) {
    this.title = title;
    this.author = author;
    this.read=read;
    this.year = year;
    this.pages = pages;
    this.stampaCopertina = function () { console.log(this.title + " " + this.author + " " + this.dataDiPubblicazione); }
    this.stampaPagineCapitoli = function () {
        console.log("Il libro " + this.title);
        for (let i = 0; i < this.pages.length; i++) {
            console.log(" ha al capitolo " + this.pages[i][0] + " pagine " + this.pages[i][1]);
        }
    }
    this.stampaAnno = function () {
        console.log("Anno di pubblicazione " + this.year);
    }
    this.stampaPagineTotali = function () {
        let countPagine = 0;
        for (let i = 0; i < this.pages.length; i++) {
            countPagine = countPagine + this.pages[i][1];
        }
        return countPagine;
    }
}

var libreriaJSON = JSON.stringify(libreria);

console.log(library);


function createLibrary() {
    let background = true;
    let table = document.getElementById('libreria');
    table.innerHTML = '';
    table.setAttribute('class','table');
    for (const book of library) {
        let item = document.createElement('div');
        if (!!background) {
            item.setAttribute('class','book flex bgGrey');
            background = false;
        } else {
            item.setAttribute('class','book flex');
            background = true;
        }
        let authorDiv = document.createElement('div');
        authorDiv.append(book.author);
        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('class','width50')
        titleDiv.append(book.title);
        let yearDiv = document.createElement('div');
        yearDiv.append(book.year);
        item.appendChild(titleDiv);
        item.appendChild(authorDiv);
        item.appendChild(yearDiv);
        console.log(item);
        table.appendChild(item);
        //row +='<div><div>'+book.title+'</div><div>'+book.author+'</div><div>'+book.year+'</div><div>'+book.pages+'</div></div>';
    }
}

createLibrary();


function search() {
    let searchAuthor = document.getElementById("search").value;
    if (searchAuthor != '') {
        for (const book of library) {
            let table = document.getElementById('searchResult');
            if (book.author == searchAuthor) {
                let item = document.createElement('div');
                item.setAttribute('class','book flex bgGreen');
                let authorDiv = document.createElement('div');
                authorDiv.append(book.author);
                let titleDiv = document.createElement('div');
                titleDiv.setAttribute('class','width50')
                titleDiv.append(book.title);
                let yearDiv = document.createElement('div');
                yearDiv.append(book.year);
                item.appendChild(titleDiv);
                item.appendChild(authorDiv);
                item.appendChild(yearDiv);
                console.log(item);
                table.appendChild(item);
            }
        }
    }
}



function inserisciLibro() {
    var title = document.getElementById("nome").value;
    var author = document.getElementById("autore").value;
    let read = false;
    var year = document.getElementById("dataDiPubblicazione").value;
    var pages = document.getElementById("pagine").value;
    var newBook = new book(title,author,read,year,pages);
    library.push(newBook);
    createLibrary();
}

function cancelBook(){
    let nome = document.getElementById("textNome").value;
    var index = 0;
    for( const l of library){ 
        if ( l.title==nome) {
            library.splice(index,1); 
            
        } 
        
        if(l.author==autore){
            library.splice(index,1);
            
        }
        index++;
        
     }
    createLibrary();
}