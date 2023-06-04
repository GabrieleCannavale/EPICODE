let btnBgTrigger = document.getElementById("bg-trigger")
let bodyPage = document.body


function randomBackground() {
   let rosso = Math.floor(Math.random() * 256);
   let giallo = Math.floor(Math.random() * 256);
   let blu = Math.floor(Math.random() * 256);
   
   let finalColor = (`rgb(${rosso},${giallo},${blu})`);
 
    return finalColor
}


function triggerBackground() {
    bodyPage.style.backgroundColor = randomBackground()
}
