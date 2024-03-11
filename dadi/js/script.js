// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random per il giocatore e uno per il computer
const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('num utente', userNumber);
console.log('num computer', computerNumber);

// Se il numero del giocatore è più alto ha vinto il giocatore
// altrimenti se il numero del computer è più alto ha vinto il computer
// altrimenti è patta
let userMessage;
if(userNumber > computerNumber) {
    userMessage = 'Bravissimo hai vinto :)';
} else if(computerNumber > userNumber) {
    userMessage = 'Ha vinto il computer :(';
} else {
    userMessage = 'Pari e patta!';
}

alert(userMessage);
