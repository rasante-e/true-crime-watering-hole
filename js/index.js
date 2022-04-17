

/*
require('dotenv').config("../.env");
const testVar = process.env.PASSWORD;
console.log(testVar);
*/

//MAKE BELOW LINE LIVE
//const secrets = require("../secrets.json");

//console.log(secrets);
/*
const username = JSON.stringify(secrets[0]);
console.log(username);
*/

//MAKE BELOW LINE LIVE
//const username = JSON.stringify(secrets.USERNAME);




/*
"USERNAME":"ADD",
"PASSWORD":"ADD",
"API_KEY":"ADD",
"API_SECRET":"ADD"
*/

//console.log(process.env.PASSWORD); // remove this after you've confirmed it working
const https = require('https');


  /*
  reddit.get(/r/UnresolvedMysteries.json) {

  }

  */
 /* 
  const res = await reddit.get('/r/UnresolvedMysteries/new', {
count:"2"
  })
*/


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

//Pulling data using Reddit API


//Connecting to RestDB, which contains user's wishlist

var options = {
    "method": "GET",
    "hostname": "https://tcwishlist-71b8.restdb.io/",
    "path": "/rest",
    "port": 443,
    "headers": {
      "Content-Type": "application/json",
      "x-apikey": "6251fbbf67937c128d7c9640",
      "Cache-Control": "no-cache"
    }
};

https.get(options, (res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            // do something with JSON
            console.log(json);
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});