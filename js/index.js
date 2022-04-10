
//Code to fetch IMDb list data and convert to an HTML list
var movieList = document.getElementById("actual-imdb-list");

//Attempt to create list by converting to an object

async function buildList () {
    const requestURL="test.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const movies = await response.json();

    //For loop to create each movie list item
    for (var i = 0; i < 6; i++) {
        
        var movie = document.createElement("li");
        movieList.appendChild(movie);
        movie.classList.add("retrieved");
        movie.innerHTML = "Name: " + movies.items[i].title + "<br>" + "Year: " + movies.items[i].year + "<br>" + "IMDb rating: " + movies.items[i].imDbRating;
        
    }
}

buildList();

