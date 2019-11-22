// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50


// creo l’array(vuoto)
var mineGenerate = [];
var contatore = 0;
while (mineGenerate.length < 16) {
 var mine = generaRandom(1, 100); //Creo un numero causale
 if(!mineGenerate.includes(mine)) { //Controllo che il numero non ci sia nell’Array
       mineGenerate.push(mine); //Se non c’è lo metto nell’array (mineGenerate)
       console.log('mine ' + mineGenerate);
 }
 contatore++
}

var numeriBuoni = []
do { //In seguito chiedo all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
  var numero = parseInt(prompt('Digita un numero da 1 a 100'));
  if (numero != mineGenerate && !numeriBuoni.includes(numero)) {//i numeri digitati dall'utente vanno in un altro array (numeriBuoni) se sono diversi da quelli inseriti nell'array mineGenerate
    numeriBuoni.push(numero);
  } else if (numeriBuoni.includes(numero) && isNaN(numero) && numero < 1 && numero > 100) { //controllo che l'utente abbia inserito un numero corretto
    console.log('numero non corretto');
    alert('O stai cercando di barare, o hai digitato qualcosa che non è un numero!');
  }
   console.log('numeri buoni ' + numeriBuoni);
   if (numeriBuoni.length == 5) {//se l'utente arriva al numero max di tentativi senza beccare mine ha vinto
     console.log(':-P You Win...CHE CULOOOOO!!!!');

   }

} while (!mineGenerate.includes(numero)) {// Se il numero è presente nella lista delle mine generate, la partita termina
  console.log('BOOOOOOOOM!!! GAME OVER!!! sei saltato in aria in 1000 pezzi');
}


  //se digita una lettera?

//funzioni
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
