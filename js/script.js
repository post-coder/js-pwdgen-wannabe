/*

Utilizzando tutti gli strumenti necessari visti stamattina:
- Chiedi all’utente il suo nome,
- poi chiedi il suo cognome,
- poi chiedi il suo colore preferito
- Infine scrivi sulla pagina una password creata al momento che segue questo schema:
nomecognomecolorepreferito23

*/

const userName = prompt("Inserisci il tuo nome");
const userFamilyName = prompt("Inserisci il tuo cognome");
const userFavoriteColor = prompt("Inserisci il tuo colore preferito");

// test
// const userName = "nome"
// const userFamilyName = "cognome"
// const userFavoriteColor = "colore"

const randomNumber = 47;


document.getElementById("passwordElement").innerHTML = userName + userFamilyName + userFavoriteColor + randomNumber;