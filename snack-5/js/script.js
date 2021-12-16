// Snack-5 
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.


// creo array vuoto
let numberList = [];
// fisso variabile somma = 0
let sum = 0;

// creo ciclo e aggiungo prompt con richiesta numero da inserire all'utente
// sommo i numeri aggiunti dall'utente. Il ciclo continua finchè la somma dei numeri è < 50
do {
    let number = parseInt(prompt('Inserisci un numero'));
    numberList.push(number);
    sum += number;
    console.log(number);
    console.log(numberList);
} while(sum < 50);

// stampo in console
console.log(sum);