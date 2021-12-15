// Snack-1

// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti
// ---------------------------- //

// fisso variabile sum=0 a cui poi andranno sommati i numeri dell'utente;
let sum = 0;

// creo ciclo ripetuto per 10 volte con prompt e fisso la somma += ai numeri inseriti dall'utente;
for (let i = 0; i < 10; i++) {
    userNumber = parseInt(prompt('Inserisci un numero'));
    sum += userNumber;
} 

// stampo in console
console.log(sum);