const addBtn = document.querySelector(".addMovieBtn");
const nameInput = document.querySelector("#movie-name");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#movie-image-link");
const tableBody = document.querySelector(".table-body");
const clearAllMoviesBtn = document.querySelector("#clearAllMovies")

eventListeners();

function eventListeners(){
    addBtn.addEventListener("click",whenClick);
    document.addEventListener("DOMContentLoaded",function(){
        let movies = Storage.getStorage();
        UI.loadMoviesFromStorage(movies);
    })
    tableBody.addEventListener("click",clickForDelete);
    clearAllMoviesBtn.addEventListener("click",clickForClearAllMovies);
}

function whenClick(e){
    const name = nameInput.value;
    const director = directorInput.value;
    const url = urlInput.value;
    if(name == "" || director == "" || url == ""){
        UI.sendMessage("success","Film Başarıyla Listeye Eklendi");
    }
    else{
        const newMovie = new Movie(name,director,url);
        UI.addUI(newMovie);
        Storage.addStorage(newMovie);
        UI.sendMessage("success","Film Başarıyla Listeye Eklendi");
        UI.clearInputs(nameInput,directorInput,urlInput);
    }
}

function clickForDelete(e){
    e.target.parentElement.parentElement.remove()
    Storage.deleteMovieFromStorage(e);
}

function clickForClearAllMovies(){
    UI.clearAllMovies();
    Storage.ClearAllMoviesFromStorage();
}





