const apiUrl = "https://striveschool-api.herokuapp.com/api/agenda";

const myOl = document.getElementById("descriptions");

async function agenda() {
    try {
        const res = await fetch(apiUrl); 
        const json = await res.json();
        
        json.forEach(element => {
            let myLi = document.createElement("li");
            myLi.innerText = element.description;

            myOl.appendChild(myLi);

        });

    } catch(error) {
        console.log(error);
    }


}

agenda();