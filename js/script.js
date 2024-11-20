/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* 1. creazione del promt dove chiediamo di inserire la parola
   2. creare la funzione 
   3. all'interno della funzione creare un if dove: parola inserita deve essere = alla parola al contrario 
   4. se la parla è uguale il risutato è true altrimenti false
*/


const parola = prompt('inserisci una parola').toLocaleLowerCase() ;
let parolaGirata = '';
let message;

function reverse (parolaGirata) {
  for (let i = parola.length -1; i>=0; i--) {
    parolaGirata += parola[i]
   }
  return parolaGirata
}

if (parola == reverse(parolaGirata)) {
  message = 'la parola è palindroma';
} else {
  message = 'la parola non è palindroma'
}

console.log(message);


/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const numeroGiocatore = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(`il numero inserito da te è: ${numeroGiocatore}`);

const numeroComputer = getRandom(1,5);
console.log(`il numero ramdom è: ${numeroComputer}`);

const totale = somma(numeroGiocatore,numeroComputer);
console.log(`la somma tra il numero random e quello inserito da te è: ${totale}`);

console.log('il totale è un numero:' + pariDispari(totale)) ;


function getRandom(min, max) {
  return (Math.ceil(Math.random()* (max - min +1) + min));
}


function somma(numero1, numero2) {
  const sommaValori = numero1 + numero2; 
  return sommaValori
}

function pariDispari(sommaValori) {
  if (sommaValori % 2) {
    return 'DISPARI'
  } else {
    return 'PARI'
  }
}

