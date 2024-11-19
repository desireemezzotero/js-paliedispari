/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* 1. creazione del promt dove chiediamo di inserire la parola
   2. creare la funzione 
   3. all'interno della funzione creare un if dove: parola inserita deve essere = alla parola al contrario 
   4. se la parla è uguale il risutato è true altrimenti false
*/


const parola = prompt('inserisci una parola');
let parolaGirata = '';

function reverse (parolaGirata) {
  for (let i = parola.length -1; i>=0; i--) {
    parolaGirata += parola.at(i)
   }

  return parolaGirata
}


console.log(parolaGirata);


/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const numeroGiocatore = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(numeroGiocatore);
console.log(getRandom(1,5));
const totale = somma(numeroGiocatore,getRandom(1,5));
console.log(totale);


function getRandom(min, max) {
  const numeroComputer = (Math.ceil(Math.random()* (max - min +1) + min));
  return numeroComputer ;
}


function somma(numero1, numero2) {
  const sommaValori = numero1 + numero2; 
  return sommaValori
}

function pariDispari () {
  if (sommaValori % 2) {
    return 'DISPARI'
  } else {
    return 'PARI'
  }
}





