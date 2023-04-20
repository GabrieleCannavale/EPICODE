// Esercizi aggiuntivi

//? EXTRA 1
//? Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
//? e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
//? La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.

/*
function giveMeRandom(n) {
  
    let randomArr = []
    
    for (let i = 0; i < n; i++) {
      let randomNum = Math.floor(Math.random() * 11)
      randomArr.push(randomNum)
    }
    return randomArr
  }

function checkArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5 ) {
            console.log(true)
            sum += array[i]
        } else {
            console.log(false)
        }
        
    }
    return sum
}

console.log(checkArray(giveMeRandom(7)))
*/


//? EXTRA 2
//? Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. 
//? Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
//? Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.

let shoppingCart = [
    {
        price: 100,
        nameitem: "fork",
        id: "12345999",
        n: 2,
    },
    {
        price: 34,
        nameitem: "spoon",
        id: "12345000",
        n: 3,
    },
    {
        price: 15,
        nameitem: "glass",
        id: "12345111",
        n: 1,
    },
]

/*
function shoppingCartTotal(arr) {
    let total = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum = arr[i].price * arr[i].n;
       total += sum  
    }
    return total
}

console.log(shoppingCartTotal(shoppingCart))
*/


//? EXTRA 3
//? Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. 
//? Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
//? Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, 
//? lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.


/*
function addToShoppingCart(object) {
    shoppingCart.push(object)
    return shoppingCart
}

let item = {
    price: 43,
    nameitem: "knife",
    id: "12345444",
    n: 3
}

console.log(addToShoppingCart(item))
console.log("il numero degli elementi nel carrello è: " + shoppingCart.length)
*/

//? EXTRA 4
//? Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. 
//? Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
//? Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.


/*
function maxShoppingCart(arr) {
    let maxprice = 0
    let mostExpensive = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price > maxprice) {
            maxprice = arr[i].price;
            mostExpensive = arr[i];
        }

    }
    return mostExpensive
}

console.log(maxShoppingCart(shoppingCart))
*/

//? EXTRA 5
//? Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. 
//? Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
//? Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.


/*
function latestShoppingCart(array) {
    let lastItem = {}
    for (let i = 0; i < array.length; i++) {
         if (i = array.length - 1) {
            lastItem = array[i]
         }
    }
    return lastItem
}

console.log(latestShoppingCart(shoppingCart))
*/


//? EXTRA 6
//? Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
//? La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.


/*
function loopUntil(x) {
    let y = "devi inserire un numero intero compreso tra 0 e 9"
    let randomNum
    if (isNaN(x)) {
        return y
    } else if ((x < 0) && (x > 9)) {
        return y
    }

    for (let i = 0; i <= 3; i++) {
        randomNum = Math.floor(Math.random() * 10)
        if (randomNum <= x) {
            console.log(randomNum);
            i = 0;
        } else {
            console.log(randomNum);
        }
    }
}

console.log(loopUntil(6))
*/



//? EXTRA 7
//? Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
//? La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.

/*
function average(array) {


    let total = 0
    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        total += num

        if (isNaN(array[i])) {
            return "please check your array"
        }
    }
    let totalAverage = total / array.length
    return totalAverage
}


console.log(average([115, 64, 3, 7, 44, 23]))
*/


//? EXTRA 8
//? Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).

/*
let stringArr = ["ciao", "ciaomondo", "hello", "helloworldhello", "world"]

function longest(array) {
    let maxString = " "
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxString.length) {
            maxString = array[i]
        }

    }
    return maxString
}

let result = longest(stringArr)
console.log(result)
*/



//? EXTRA 9
//? Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. 
//? La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
//? La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".

/*
function antiSpam(emailContent) {
    if (emailContent.includes("SPAM" || "SCAM")) {
        return false
    } else return true
}

console.log(antiSpam("Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, SPAM officia consectetur saepe accusamus"))
*/

//? EXTRA 10
//? Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.

/* 
function daysAgo(date) {
    let today = new Date();
    let timeDiff = today.getTime() - date.getTime();
    let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return daysDiff
}

console.log(daysAgo(new Date(2022, 01, 01)))
*/

//? EXTRA 11
//? Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
//? La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
//? Es.: x = 3, y = 2
//? ["00","01","02"
//? "10","11","12"]


/*
function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < x; i++) {
        let xRow = []
        for (let j = 0; j < y; j++) {
            xRow.push([`${i}${j}`])
        }
        matrix.push(xRow)
    }
    return matrix
}
console.log(matrixGenerator(7, 4))
*/