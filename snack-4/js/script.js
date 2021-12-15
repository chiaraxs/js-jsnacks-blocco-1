// snack-4 
// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// chiedo il numero all'utente tramite prompt
let userNumber = (prompt('Inserisci un numero di 4 cifre'));

// fisso variabile sum=0
let sum = 0;

// creo ciclo for con somma delle cifre del numero immesso dall'utente nel prompt sfruttando il .lenght
// il parseInt trasforma la stringa in numeri che può così sommare 
for(i = 0; i < userNumber.length; i++){
    sum += parseInt(userNumber[i]);
}

// stampo in console
console.log(sum);