//? focus list card
let cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("mouseover", (event) => {
    card.classList.add("focus-over");
  })

  card.addEventListener("mouseout", (event) => {
    card.classList.remove("focus-over");
  });
}
