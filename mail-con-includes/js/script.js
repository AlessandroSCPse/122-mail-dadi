// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

const emails = ['topolino@mail.it', 'paperino@mail.it', 'minnie@mail.it', 'alessandro@mail.it'];
const userEmails = 'topolino@mail.it';

let emailFound = emails.includes(userEmails);

if(emailFound === true) {
    alert('hai accesso');
} else {
    alert('non hai accesso');
}
