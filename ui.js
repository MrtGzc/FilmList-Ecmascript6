
const form = document.querySelector(".table-body");
const cardBody = document.querySelectorAll(".card-body")[0];

class UI{

    static addUI(newMovie){
        form.innerHTML += 
    
        `
        <tr>
            <td>${newMovie.name}</td>
            <td>${newMovie.director}</td>
            <td>${newMovie.url}</td>
            <td><a class="btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
    }
    static sendMessage(type,message){
        let div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.innerHTML = message;
        cardBody.appendChild(div);
        setTimeout(function(){
            div.remove();
        },1500)
    }
    
    static clearInputs(e1,e2,e3){
        e1.value = "";
        e2.value = "";
        e3.value = "";
    }
    
    static loadMoviesFromStorage(movies){
        movies.forEach(function(movie){
            form.innerHTML += 
    
        `
        <tr>
            <td>${movie.name}</td>
            <td>${movie.director}</td>
            <td>${movie.url}</td>
            <td><a class="btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
        })
    }
    
    static deleteMovieFromUI(element){
        element.parentElement.parentElement.remove();
    }
    
    static clearAllMovies(){
        form.innerHTML = " ";
    }

}


