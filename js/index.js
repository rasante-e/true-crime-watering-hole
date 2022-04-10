
//Code to fetch IMDb list data and convert to an HTML list
var movieList = document.getElementById("actual-imdb-list");

//Attempt to create list by converting to an object

async function buildList () {
    const requestURL="test.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const movies = await response.json();

    /*
    for (var i = 0; i < 6; i++) {
        //console.log(i);
        
        var movie = document.createElement("li");
        movieList.appendChild(movie);
        article.classList.add("retrieved");
        article.innerHTML = "Name: " + obj[i].name + "<br>" + "Type: " + obj[i].type + "<br>" + obj[i].url;
        
    }*/
    console.log(movies.items);
    //console.log(typeof movies);
}

buildList();

