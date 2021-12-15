// Snack-2.
// Stampa il cubo di ciascuno dei primi N numeri, dove N è un numero indicato dall’utente. 
// (se inserisce 10, si stampa il cubo di 1, di 2, di 3,…)

// ordine di costruzione:
// Fammi un for che stampa i valori da 1 a 10 compresi
// Ora invece di stampare i, stampami il valore di i al cubo (i**3 o Math.pow(i,3))
// Ora invece di andare da 1 a 10 vai da 1 al numero che ha chiesto l'utente


let userNumber = parseInt(prompt('Inserisci un numero'));

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     console.log(Math.pow(i,3));
//     console.log(userNumber);
// }

for (let i = 1; i <= userNumber; i++) {
    console.log(Math.pow(i,3));
}

