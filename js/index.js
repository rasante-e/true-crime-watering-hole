const https = require('https');
var watchify = require('watchify');
var browserify = require('browserify');

require('dotenv').config();
console.log(process.env);

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


var postList = document.getElementById("actual-reddit-list");







//Fetch for Reddit posts
  /*
fetch("https://www.reddit.com/r/TellMeAFact/top/.json?count=20").then(function (response) {
    return response.json();
    //return response;
}).then (function(obj) {

    for (var i = 0; i < obj.length; i++) {
    console.log(i);
    }
  
    for (var i = 0; i < obj.length; i++) {
        var movie = document.createElement("li");
        movieList.appendChild(movie);
        movie.classList.add("retrieved");
        movie.innerHTML = "Name: " + obj[i].app_name + "<br>" + "Type: " + obj[i].app_author + "<br>" + "URL: " + obj[i].app_semantic_version;
        
    }

    
}).catch (function(error) {
    console.error("There's an error");
    console.error(error);
});
*/



/*
const redditFetch = require('reddit-fetch');

redditFetch({

    subreddit: 'UnresolvedMysteries',
    sort: 'new',
    allowNSFW: false,
    allowModPost: true,
    allowCrossPost: true,
    allowVideo: true

}).then(post => {
    console.table(post);
});
*/


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

