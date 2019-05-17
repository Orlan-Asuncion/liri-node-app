
require("dotenv").config();

var keys = require("./keys.js");

var axios = require('axios');

var request = require('request');

var fs = require('file-system');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var getArtistNames = function (artist) {
    return artist.name;
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
            console.log('artist(s):' + songs[i].artists.map(
                getArtistNames));
            console.log('song name:' + songs[i].name);
            console.log('preview song:' + songs[i].oreview_url);
            console.log('album:' + songs[i].album.name);
            console.log('--------------------------------');
        }
    });
} 

// var queryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
// console.log("Upcoming Concerts of" + artistNames);
// axios.get(queryURL)
// .then(artistResponse => {
//     let events =artistResponse.data;
//     event.forEach((item)=>{
        
//         console.log("Name of the venue:", item.venue.name);
//         console.log("Venue Location:", item.venue.location);
//         let date =moment(item.datetime);
//         console.log("Date of the event", date.format("MM/DD/YYYY"));
//     });
// })
// .catch(err=>{
//     console.log(err);
// });
var getMeMovie = function(movieName){
    request('http://omdbapi.com/?t='+ movieName + '&y=&plot=short&apikey=trilogy', function(error, response, body){
        if(!error && response.statusCode ==200){

            var jsonData =JSON.parse(body);

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
 var doWhatItSays = function() {
fs.readFile('random.txt', 'utf8', function(err, data){
    if (err) throw err;
    
    var dataArr = data.split(',');

    if(dataArr.length == 2){
       pick(dataArr[0], dataArr[1]); 
    } else if (dataArr.length == 1){
        pick(dataArr[0]);
    }
    console.log(data);
});
}
var pick = function (caseData, functionData) {
        switch (caseData) {
            case 'spotify-this-song':
                getMeSpotify(functionData);
                break; 
            case 'concert-this':
                getMeAxios(functionData);
                break; 
            case 'movie-this':   
                getMeMovie(functionData);
                break;
            case 'do-what-it-says':   
                doWhatItSays();
                break;
                default:
                console.log('LIRI does not know that');

        }

    }

pick(process.argv[2], process.argv[3]);