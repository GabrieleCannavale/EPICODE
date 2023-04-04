/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

//? ESERCIZIO 1
//? Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.

/*
function area(l1, l2) {
  area = l1 * l2 
  return area 
}

console.log(area(2, 4))
*/

//? ESERCIZIO 2
//? Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
//? La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso 
//? allora deve ritornare la loro somma moltiplicata per 3.

/*
function crazySum(num1, num2) {
    let sum
    if (num1 !== num2) {
        sum = num1 + num2
    } else {
        sum = (num1 + num2) * 3
    }
    return sum
}

console.log(crazySum(5, 5))
*/


//? ESERCIZIO 3
//? Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
//? Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.

/*
function crazyDiff(num3) {
    let diff = num3 - 19
    if (diff <= 19) {
        return diff
    } else {
        diff = diff * 3
        return diff
    }
}

console.log(crazyDiff(119))
*/


//? ESERCIZIO 4
//? Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.

/*
function boundary(num4) {
  num4 = ParseInt(num4)
  let bool = false;
  if ((num4 >= 20)&&(num4 <= 100))  {
    bool = true
  }
  return bool
}

console.log(boundary(43))
console.log(boundary(243))
*/


//? ESERCIZIO 5
//? Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
//? La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
//? ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.

/*
function codify(string1) {
  let codedString = "code" + string1
  if (string1.startsWith("code")) {
    return string1
  } else {
    return codedString
  }
}

console.log(codify("code alla vaccinara"))
console.log(codify("alla vaccinara"))
console.log(codify("alla code vaccinara"))
*/


//? ESERCIZIO 6
//? Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
//? La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
//? SUGGERIMENTO: operatore modulo

/*
function check3and7(num) {
  if ((isNaN(num)) || (num <= 0)) {
    return "il valore non è un numero maggiore di zero";
  }
  let bool = false;
  if ((num % 3 === 0) || (num % 7 === 0)) {
    return true;
  } else {
    return false
  }

}


console.log(check3and7("peppe"))
*/

//? ESERCIZIO 7
//? Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).

/*
function reverseString(name) {
  let name1 = name.split("");
  let name2 = name1.reverse();
  let name3 = name2.join("");
  return name3
}

console.log(reverseString("Gabriele"))
*/

//? ESERCIZIO 8
//? Scrivi una funzione chiamata "upperFirst", 
//? che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.


/*
function upperFirst(str) {

  let string = str.split("");
  let result = "";

  for (let i = 0; i < string.length; i++) {
     if (string[i] === " ") {
     result += " " + string[i + 1].upperCase;
     } else {
      result += string[i]
     }
  }
  return result
}

console.log("ciao mondo tutto bene")
*/


//? ESERCIZIO 9
//? Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.

/*
function cutString(str) {
  let str1 = str.slice(1,-1)
  return str1
}

console.log(cutString("CIAOMONDO"))
*/

//? ESERCIZIO 10
//? Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n 
//? e ritorna un array contenente n numeri random contenuti tra 0 e 10.


/*
function giveMeRandom(n) {
  
  let randomArr = []
  
  for (let i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 11)
    randomArr.push(randomNum)
  }
  return randomArr
}

console.log(giveMeRandom(7))
*/