
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');



var spotify = new spotify(keys.spotify);

var getArtistNames = function(artist){
    return artist.name;
}

var getMeSpotify = function(songName){

 spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
        return;
    }
    var songs =data.tracks.items;
    for(var i=0; i<songs.length; i++){
        console.log(i);
        console.log('artist(s)L' + songs[i].artists.map(
            getArtistNames));
        console.log('song name:' +songs[i].name);
        console.log('preview song:' +songs[i].oreview_url);
        console.log('album:' +songs[i].album.name);
        console.log('--------------------------------' );
    }
    }
    }
    }

    console.log(data.tracks.item[0]);
});   
}
var pick = function(caseData, functionData){
    switch(caseData){
        case 'spotify-this-song':
        getMeSpotify(functionData);
        break;
        console.log('LIRI does notknow that');

    }

}



