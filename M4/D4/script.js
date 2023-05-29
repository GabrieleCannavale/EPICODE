// Funzione per aggiungere un articolo al carrello
const addToCart = (book) => {
    const cartDropdown = document.getElementById("cartDropdown");

    // Creare l'elemento per l'articolo del carrello
    const cartItem = document.createElement("li");
    cartItem.classList.add("dropdown-item");
    cartItem.textContent = book.title; // Aggiungi il titolo del libro o un'altra informazione rilevante

    // Aggiungi l'articolo al dropdown del carrello
    cartDropdown.appendChild(cartItem);
};

// Funzione per ottenere i libri e mostrare le immagini
const getBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then((res) => res.json())
        .then((data) => {
            const row = document.querySelector(".row");

            data.forEach((book) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-3", "col-md-4", "col-6", "p-1", "m-1", "card-book");

                const img = document.createElement("img");
                img.src = book.img;
                card.appendChild(img);

                const infoCard = document.createElement("div");
                infoCard.classList.add("d-flex", "justify-content-between", "m-1");

                const shopButton = document.createElement("button");
                shopButton.textContent = "Add to Cart";
                shopButton.classList.add("btn", "btn-success");

                // Aggiungi l'evento click al pulsante "Add to Cart" per chiamare addToCart()
                shopButton.addEventListener("click", () => {
                    addToCart(book);
                });

                infoCard.appendChild(shopButton);

                let price = document.createElement("p");
                price.textContent = book.price;
                infoCard.append(price);

                card.appendChild(infoCard);

                row.appendChild(card);
            });
        })
        .catch((err) => console.log(err));
};

// Chiamata alla funzione getBooks() per ottenere i libri
getBooks();
