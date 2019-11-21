// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50

// 1) Scrivere la consegna
// 2) Scomporre il problema in punti
// 3) Espandere i punti BANALI
// 4) Tradurre in codice
//-------------------------------
// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// 1) creo l’array(vuoto)
// 2)Creo un numero causale
// 3)Controllo che il numero non ci sia nell’Array
// 4)Se non c’è lo metto nell’array
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l’utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// 1) Se pesto la mina GAME OVER(se il numero è nell’array sei al CREATORE )
// 2)Altrimenti ripetiamo la richiesta di inserire un numero
// La partita termina quando il giocatore inserisce un numero “mina” o raggiunge il numero massimo possibile di numeri consentiti (84).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// creo l’array(vuoto)
var mineGenerate = [];
var ripetizioni = 0;
while (mineGenerate.length < 16) {
 var mine = generaRandom(1, 100); //Creo un numero causale
 if(!mineGenerate.includes(mine)) { //Controllo che il numero non ci sia nell’Array
       mineGenerate.push(mine); //Se non c’è lo metto nell’array
       console.log(mineGenerate);
 }
}

do {
  var numero = parseInt(prompt('Digita un numero da 1 a 100'));
  console.log(mineGenerate.includes(numero));
} while (!mineGenerate.includes(numero));

  console.log('BOOOOOOOOM!!! hai perso!!! sei saltato in aria in 1000 pezzi');

//funzioni
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
