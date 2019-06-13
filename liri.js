
require("dotenv").config();

var keys = require("./keys.js");

var axios = require('axios');

var request = require('request');

var fs = require('file-system');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var moment = require('moment');

var getArtistNames = function (artist) {
    return artist.name;
}
//Function for Concert Info: Bands in Town
function showConcertInfo(inputParameter) {
    console.log(inputParameter);
    var queryUrl = "https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp";
    request(queryUrl, function (error, response, body) {
        // If the request is successful
        console.log(queryUrl);
        if (!error && response.statusCode === 200) {
            var concerts = JSON.parse(body);
            for (var i = 0; i < concerts.length; i++) {
                console.log("**********EVENT INFO*********");
                fs.appendFileSync("log.txt", "**********EVENT INFO*********\n");//Append in log.txt file
                console.log(i);
                fs.appendFileSync("log.txt", i + "\n");
                console.log("Name of the Venue: " + concerts[i].venue.name);
                fs.appendFileSync("log.txt", "Name of the Venue: " + concerts[i].venue.name + "\n");
                console.log("Venue Location: " + concerts[i].venue.city);
                fs.appendFileSync("log.txt", "Venue Location: " + concerts[i].venue.city + "\n");
                console.log("Date of the Event: " + concerts[i].datetime);
                fs.appendFileSync("log.txt", "Date of the Event: " + concerts[i].datetime + "\n");
                console.log("*****************************");
                fs.appendFileSync("log.txt", "*****************************" + "\n");
            }
        } else {
            console.log('Error occurred.');
        }
    });
}

var getMeSpotify = function (songName) {

    spotify.search({ type: 'track', query: 'Concert-this' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
            return;
        }

        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log('******LIRI SAYS******');
            console.log('artist(s):' + songs[i].artists.map(
                getArtistNames));
            console.log('song name:' + songs[i].name);
            console.log('preview song:' + songs[i].preview_url);
            console.log('album:' + songs[i].album.name);
            console.log('****************************');
        }
    });
}


var getMeMovie = function (movieName) {
    request('http://omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
        if (!error && response.statusCode == 200) {

            var jsonData = JSON.parse(body);

            console.log('Title:' + jsonData.Title);
            console.log('Year:' + jsonData.Year);
            console.log('Rated:' + jsonData.Rated);
            console.log('IMDB Rating:' + jsonData.imdbRating);
            console.log('Country:' + jsonData.Country);
            console.log('Language:' + jsonData.Language);
            console.log('Plot:' + jsonData.Plot);
            console.log('Actors:' + jsonData.Actors);
            console.log('Rotten tomatoes rating:' + jsonData.tomatoRating);
            console.log('Rottentomatoes URL:' + jsonData.tomatoURL);
        }
    });
}
var doWhatItSays = function () {
    fs.readFile('random.txt', 'utf8', function (err, data) {

        console.log(data);
        if (err) throw err;

        var dataArr = data.split(',');

        if (dataArr.length == 2) {

            pick(dataArr[0], dataArr[1]);
            //    pick(dataArr[0], "Madonna"); 
        } else if (dataArr.length == 1) {
            pick(dataArr[0]);
        }
        console.log(data);
    });
}
var pick = function (caseData, functionData) {
    console.log(caseData);
    switch (caseData) {
        case 'spotify-this-song':
                console.log("1");

            getMeSpotify(functionData);
            break;
        case 'concert-this':
                console.log("2");

            showConcertInfo(functionData);
            break;
        case 'movie-this':
                console.log("3");

            getMeMovie(functionData);
            break;
        case 'do-what-it-says':
            console.log("4");

            doWhatItSays();
            break;
        default:
            console.log('LIRI does not know that');

    }

}

pick(process.argv[2], process.argv[3]);