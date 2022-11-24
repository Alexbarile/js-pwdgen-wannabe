// inserimento prompt nome

let nome = prompt('Inserisci il tuo nome');

// inserimento prompt cognome

let cognome = prompt('Inserisci il tuo cognome');

// inserimento prompt colore preferito

let colore_preferito = prompt('Inserisci il tuo colore preferito');

// concateniamo il tutto con l'innerHTML

document.getElementById('password').innerHTML = 'La tua password è' + " " + nome + cognome + colore_preferito + '21';