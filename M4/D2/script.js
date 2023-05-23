// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));

const getAlbum = (id) => {
    let artistSection = document.querySelector(`#${id}`);
    let albumList = document.querySelector(`#${id}Section`);
  
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + id)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        let albums = result.data;
        console.log(albums);
        artistSection.classList.remove("d-none");
        for (const singleEl of albums) {
          let newDiv = document.createElement("div");
          newDiv.classList.add("col", "col-3", "my-2");
          albumList.classList.add("mb-5");
          let albumImg = document.createElement("img");
          albumList.appendChild(newDiv);
          newDiv.appendChild(albumImg);
          albumImg.src = singleEl.album.cover_medium;
        }
      })
      .catch((error) => console.log(error));
  };
  getAlbum("eminem");
  getAlbum("metallica");
  getAlbum("queen");
