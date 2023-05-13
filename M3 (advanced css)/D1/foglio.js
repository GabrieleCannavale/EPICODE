window.onload = function(){
    document.querySelector(".blog-sidebar div:last-child li:nth-child(2)").remove();
  
}

let linkOff=document.getElementsByClassName("stretched-link");

console.log(linkOff);

for(let deleteItem of linkOff){
    deleteItem.addEventListener("click", (event)=>{
        event.target.parentNode.parentNode.parentNode.remove();
    })
}

let linkAuthor=document.querySelectorAll(".blog-post-meta a");

for(let authorAlert of linkAuthor){
    authorAlert.addEventListener("mouseover", (event)=>{
        alert(event.target.innerText);
    })
}
