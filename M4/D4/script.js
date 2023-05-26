const getBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then((res) => res.json())
        .then((data) => {
            const row = document.querySelector(".row");

            data.forEach((book) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-3", "col-md-4", "col-6", "m-1", "card-book"); // Aggiungi la classe "card-book" al div
                const img = document.createElement("img");
                img.src = book.img;
                card.appendChild(img);
                row.appendChild(card);
            });
        })
        .catch((err) => console.log(err));
};

getBooks();
