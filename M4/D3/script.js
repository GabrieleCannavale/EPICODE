const APIKEY = "LuCpoFAcWdBxZKNpxo3WNtTHMwBdKUFbzNZMwZZyPshNQTuadVAg1a8d"
const APIURL = "https://api.pexels.com/v1/"
let photoContainer = document.getElementById("photo-container")
let photoKeyword = document.getElementById("photos-keyword")

//! 1) Crea un dom con gli oggetti degli API
//! 2) Fai una chiamata AJAX 


//*creaimo una funzione per accedere all' API e farci restituire l'oggetto in formato JSON
const getAlbum = () => {
    fetch(APIURL + "/search?query=" + photoKeyword.value, {
        headers: {
            authorization: APIKEY
        }

        //Dammi risposta con il i dati del server e dammeli in formato JSON
    })
        .then((res) => {
            return res.json()
        })

        //POI richiamiamo la funzione albumCard
        .then((json) => {
            albumCard(json.photos)
        })

        //IN CASO DI ERRORE
        .catch((err) => { console.log(err) })
}



let albumCard = (photos) => {
    const domElements = photos.map((photo) => {
        console.log(photos);
        const cardBox = document.createElement("div");
        cardBox.classList.add("card-box", "col-lg-3", "col-6", "m-2");
        const img = document.createElement("img");
        img.src = photo.src.medium;
        cardBox.append(img);
        return cardBox
    })

    console.log(domElements)
    photoContainer.append(...domElements)

}


