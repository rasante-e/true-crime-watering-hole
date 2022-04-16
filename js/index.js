

/*
require('dotenv').config("../.env");
const testVar = process.env.PASSWORD;
console.log(testVar);
*/

const secrets = require("../secrets.json");

console.log(secrets);

//console.log(process.env.PASSWORD); // remove this after you've confirmed it working
const https = require('https');
const Reddit = require('reddit');


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