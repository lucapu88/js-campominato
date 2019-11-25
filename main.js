// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50

//BONUS: richiedere difficoltà all’utente difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50
var difficolta = 0;

var livello = prompt('Seleziona livello: Facile (digita 0) / Medio (digita 1) / Difficile (digita 2)');
switch (livello) {
  case 0:
      difficolta = 100;
      var ripetizioniPossibili = difficolta - 16;
      break;
  case 1:
      difficolta = 80;
      var ripetizioniPossibili = difficolta - 16;
      break;
  case 2:
      difficolta = 50;
      var ripetizioniPossibili = difficolta - 16;
      break;
}


alert("REGOLE: io penserò 16 numeri a caso che saranno le mine piazzate, tu digiterai dei numeri compresi tra 1 e 100, finchè non becchi lo stesso numero che ho pensato io, sarai fortunato ed andrai avanti nel gioco, altrimenti beccherai una mina ed esploderai in tanti pezzettini! vincerai se, raggiunto il numero massimo di tentativi (84), non pesterai mine. FAI ATTENZIONE A RICORDARTI I NUMERI DIGITATI......CI VEDIAMO ALL'INFERNO BUAHAHAHAHAHAH");

// creo l’array(vuoto)
var mineGenerate = [];
var contatore = 0;
while (mineGenerate.length < 16) {
 var mine = generaRandom(1, 100); //Creo un numero causale
 if(!mineGenerate.includes(mine)) { //Controllo che il numero non ci sia nell’Array
       mineGenerate.push(mine); //Se non c’è lo metto nell’array (mineGenerate)
       console.log('mine: ' + mineGenerate);
 }
 contatore++
}

var numeriBuoni = []
var ripetizioni = 0;
do { //In seguito chiedo all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
  var numero = parseInt(prompt('Digita un numero da 1 a 100'));
  if (!numeriBuoni.includes(numero) && !isNaN(numero) && numero >= 1 && numero <= 100) {//i numeri digitati dall'utente vanno in un altro array (numeriBuoni) se sono diversi da quelli inseriti nell'array mineGenerate
    numeriBuoni.push(numero);
    ripetizioni++
  } else { //controllo se l'utente digita qualcosa che non è un numero o che non rispetta le condizioni
    console.log('numero non corretto');
    alert('O stai cercando di barare, o hai digitato qualcosa che non è un numero!');
  }
   console.log('numeri buoni: ' + numeriBuoni);


} while (!mineGenerate.includes(numero) && ripetizioni < ripetizioniPossibili);//se si digita un numero compreso nell'array mineGenerate e se si raggiunge il numero max di tentativi si esce dal do-while


if (ripetizioni == ripetizioniPossibili){ //se l'utente raggiunge 84 tentativi vince
  document.getElementById('vittoria').innerHTML = 'You Win....CHE CULOOOO!!! :-P';
  document.getElementById('se-vinci').setAttribute('class', 'visible');
  console.log('You Win....CHE CULOOOO!!! :-P');
} else { //altrimenti (se becca una mina prima) perde
  document.getElementById('sconfitta').innerHTML = 'GAME OVER!!! sei saltato in aria in 1000 pezzi!!!';
  document.getElementById('punteggio').innerHTML = "IL TUO PUNTEGGIO E': " + ripetizioni;
  document.getElementById('se-perdi').setAttribute('class', 'visible');
  console.log('BOOOOOOOOM!!! GAME OVER!!! sei saltato in aria in 1000 pezzi');
  console.log('il tuo punteggio è: ' + ripetizioni);
}



//funzioni
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
