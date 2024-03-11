// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

const emails = ['paperino@hotmail.it', 'topolino@gmail.com', 'alessandro@mail.it', 'pluto@mail.it'];
// Chiediamo la mail all'utente
const userEmail = prompt('Dimmi il tuo indirizzo email');

// Controllare che la mail sia presente nell'array
// Scorrere l'array di email
let emailFound = false;
for(let i = 0; i < emails.length; i++) {
    const thisEmail = emails[i];
    
    // per ogni email, se è uguale a quella che mi ha dato l'utente salvo nella variabile
    // che ho trovato la mail
    if(thisEmail === userEmail) {
        emailFound = true;
    }
}

// Se la mail l'ho trovata (controllo la variabile) scrivo all'utente che ha accesso
// altrimenti scrivo all'utente che non ha accesso
let userMessage;
if(emailFound === true) {
    userMessage = 'Hai accesso';
} else {
    userMessage = 'Non puoi entrare';
}

alert(userMessage);
