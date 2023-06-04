/* API */
let endPoint = "https://striveschool-api.herokuapp.com/books";

/* Elementi DOM */
let bookContainer = document.getElementById("book-container");
let searchField = document.getElementById("search-field");

/* Funzione ciclo oggetto */
function cicleResponse(json, searchFieldValue) {
  bookContainer.innerHTML = ""; // Cancella i risultati precedenti

  json.forEach((book) => {
    if (
      searchFieldValue.length >= 3 &&
      !book.title.toLowerCase().includes(searchFieldValue.toLowerCase())
    ) {
      return; // Non corrisponde al filtro di ricerca, passa al prossimo libro
    }

    createTemplate(book);
    console.log(book);
  });
}

/* Funzione creazione elementi card e assegnazione valori */
function createTemplate(book) {
  const cardBook = document.createElement("div");
  cardBook.classList.add(
    "card",
    "p-0",
    "d-flex",
    "col-12",
    "col-sm-6",
    "col-md-4",
    "col-xl-2",
    "justify-content-between",
    "overflow-hidden",
    "g-1"
  );

  let bookImg = document.createElement("img");
  bookImg.classList.add("img-fluid");
  bookImg.src = book.img;
 
  let bookTitle = document.createElement("h5");
  bookTitle.innerText = book.title;
  
  let bookPrice = document.createElement("p");
  bookPrice.innerText = "€" + book.price;
  
  let bookButtonContainer = document.createElement("div");
  bookButtonContainer.classList.add("d-flex", "justify-content-around");
 
  let bookButtonCart = document.createElement("button");
  bookButtonCart.innerHTML = '<ion-icon name="cart-outline"></ion-icon>';
  bookButtonCart.classList.add("btn-dark", "btn", "m-1");
    bookButtonCart.addEventListener("click", () => {
        addToCart(book);
      });
  
    let bookButtonDetail = document.createElement("a");
  bookButtonDetail.href = `dettagli.html?id=${book.asin}`;
  bookButtonDetail.target = "_blank";
  bookButtonDetail.innerText = "See Detail";
  bookButtonDetail.classList.add("btn-secondary", "btn", "m-1");

  cardBook.appendChild(bookImg);
  cardBook.appendChild(bookTitle);
  cardBook.appendChild(bookPrice);
  bookButtonContainer.appendChild(bookButtonCart);
  bookButtonContainer.appendChild(bookButtonDetail);
  cardBook.appendChild(bookButtonContainer);

  bookContainer.appendChild(cardBook);
}


function addToCart(book) {
  const cartDropdown = document.getElementById("cart-dropdown");

  // Crea un nuovo elemento per il libro nel carrello
  const cartItem = document.createElement("li");
  cartItem.classList.add("dropdown-item");

  // Crea un elemento per il titolo del libro
  const title = document.createElement("span");
  title.innerText = book.title;
  cartItem.appendChild(title);

  // Crea un elemento per il prezzo del libro
  const price = document.createElement("span");
  price.innerText = "€" + book.price;
  cartItem.appendChild(price);

  // Crea un pulsante per rimuovere il libro dal carrello
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
  removeButton.classList.add("btn", "btn-sm", "btn-danger", "ms-2", "ms-2");
  removeButton.addEventListener("click", () => {
    removeFromCart(cartItem);
  });
  cartItem.appendChild(removeButton);

  // Aggiungi il libro al carrello
  cartDropdown.appendChild(cartItem);
}

function removeFromCart(cartItem) {
  const cartDropdown = document.getElementById("cart-dropdown");
  cartDropdown.removeChild(cartItem);
}


/* Funzione gestione ricerca */
function handleSearch() {
  let searchFieldValue = searchField.value;

  fetch(endPoint)
    .then((res) => res.json())
    .then((book) => {
      cicleResponse(book, searchFieldValue);
    })
    .catch((err) => {
      console.log(err);
    });
}

/* Caricamento iniziale dei libri */
fetch(endPoint)
  .then((res) => res.json())
  .then((book) => {
    cicleResponse(book, ""); // Mostra tutti i libri all'avvio
  })
  .catch((err) => {
    console.log(err);
  });

/* Gestione evento input nella search field */
searchField.addEventListener("input", () => {
  if (searchField.value.length >= 3) {
    handleSearch();
  } else {
    fetch(endPoint)
      .then((res) => res.json())
      .then((book) => {
        cicleResponse(book, ""); // Mostra tutti i libri se la ricerca è inferiore a 3 caratteri
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
