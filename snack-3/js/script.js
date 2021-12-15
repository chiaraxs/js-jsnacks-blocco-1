// Snack-3 
// Stampa le potenze di 2 fino a 1000.


// ordine di costruzione:
// Fammi un ciclo while che mi stampa i primi 10 cubi per i numeri da 1 a 10
// Adesso cambiamo la condizione: fammi un ciclo while che mi stampa finché il valore del cubo è minore di 1000 

let i = 0;
let y = 2

// while (i < 10) {
//     console.log(Math.pow(i,3));
//     i++;
// }

while (y < 1000) {
    y = Math.pow(i, 3);
    console.log(y);
    i++;
}
