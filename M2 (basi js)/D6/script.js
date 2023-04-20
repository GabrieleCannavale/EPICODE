let myH1 = document.getElementsByTagName("h1")[0];
myH1.innerText = "Lo Smartphone nel Kebab";

let myBody = document.getElementsByTagName("body")[0];
myBody.style.backgroundColor = "lightyellow";

let myAddress = document.getElementById("address");
myAddress.innerText = "via Fasulla 123, Springfield";

let myLinks = document.querySelectorAll("a");
for (let i = 0; i < myLinks.length; i++) {
    myLinks[i].classList.add("link");
    
}


let myProductImages = document.querySelectorAll("img")
for (let i = 0; i < myProductImages.length; i++) {
    myProductImages[i].classList.toggle("hidden");
    myProductImages[i].style.visibility = "hidden";
}


function randomColor(n) {
    let array = [];  
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 347);
        array.push(randomNumber);       
    }

    let myColor = "rgb(" + array[0] + ", " + array[1] + ", " + array[2] + ")"

    let myPrice = document.getElementsByClassName("price");
    for (let i = 0; i< myPrice.length; i++) {
        myPrice[i].style.color = myColor
    }
}

let myFunction = randomColor(23)