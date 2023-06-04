// Ottieni l'ID del libro dall'URL
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

// Esempio di funzione per ottenere i dettagli del libro utilizzando l'ID
function getBookDetails(bookId) {
  //Esegui una chiamata API o accedi ai dati del libro da una fonte di dati
  //Utilizza l'ID del libro per recuperare le informazioni desiderate tramite una chiamata API
  fetch(`https://striveschool-api.herokuapp.com/books/${bookId}`)
    .then((res) => res.json())
    .then((book) => {
      // Ora puoi utilizzare i dettagli del libro ottenuti
      console.log(book);
      // Aggiungi i dettagli del libro al DOM
      const bookContainer = document.getElementById("book-container");
      const bookTitle = document.createElement("h2");
      bookTitle.innerText = book.title;
      const bookPrice = document.createElement("p");
      bookPrice.innerText = "Price: €" + book.price;
      let bookImg = document.createElement("img");
      bookImg.classList.add("img-fluid");
      bookImg.src = book.img;

      bookContainer.appendChild(bookImg);
      bookContainer.appendChild(bookTitle);
      bookContainer.appendChild(bookPrice);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Chiamata alla funzione per ottenere i dettagli del libro
getBookDetails(bookId);
