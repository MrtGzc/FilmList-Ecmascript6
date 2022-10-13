class Storage{

   static getStorage(){
        let movies;
    
        if(localStorage.getItem("movies") == null){
            movies = [];
        }
        else{
            movies = JSON.parse(localStorage.getItem("movies"));
        }
        return movies
        
    }
    
    static addStorage(newMovie){
        let movies = this.getStorage();
        movies.push(newMovie);
        localStorage.setItem("movies",JSON.stringify(movies));
    }
    
    static deleteMovieFromStorage(element){
        let movies = this.getStorage();
        movies.forEach(function(movie,index){
            if(element.target.parentElement.previousElementSibling.textContent === movie.url)
            movies.splice(index,1);
        })
        localStorage.setItem("movies",JSON.stringify(movies));
    }
    
    static ClearAllMoviesFromStorage(){
        localStorage.clear("movies");
    }
}

