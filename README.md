ABOUT THE APP

LIRI is a Language Interpretation and Recognition Interface, it's just like SIRI(Speech Interpretation and Recognition Interface).LIRI is a node.js command line that gathers information(parameters) and returns back data.In this application, user has the option to use the command lines listed below;
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

HOW LIRI WORKS

Step by Step instructions

First, navigate the LIRI node app folder and open the file liri.js.
Second, open liri.js in the bash terminal.
Third, on the command line enter the command you want to use.

       Example: Run command "concert-this"

       $ node liri.js concert-this <name of artist or band>

       Output: The system will display "List of Events": 'Name of the Venue','Venue Location' and 'Date of the Event'.

       $ node liri.js concert-this madonna
       this is loaded
**********EVENT INFO*********
0
Name of the Venue: BAM (Brooklyn Academy of Music)
Venue Location: Brooklyn
Date of the Event: 2019-09-12T20:30:00
*****************************
**********EVENT INFO*********
1
Name of the Venue: BAM (Brooklyn Academy of Music)
Venue Location: Brooklyn
Date of the Event: 2019-09-14T20:30:00
*****************************
**********EVENT INFO*********
2
Name of the Venue: BAM (Brooklyn Academy of Music)
Venue Location: Brooklyn
Date of the Event: 2019-09-15T20:30:00
*****************************
**********EVENT INFO*********
3
Name of the Venue: BAM (Brooklyn Academy of Music)
Venue Location: Brooklyn
Date of the Event: 2019-09-17T20:30:00
*****************************
**********EVENT INFO*********

Example: Run command "spotify-this-song".

       $ node liri.js spotify-this-song <name of song>

       Output: The system will display : Artist(s),The song's name, A preview link of the song from Spotify,and The album that the song is from. 
        
       $ node liri.js spotify-this-song 'Only You'
       this is loaded
    
0
******LIRI SAYS******
artist(s):Niall Horan,RTE Concert Orchestra
song name:This Town feat. The RTÉ Concert Orchestra - Live
preview song:null
album:Flicker Featuring The RTÉ Concert Orchestra (Live)
****************************
1
******LIRI SAYS******
artist(s):Jonas Brothers,Demi Lovato
song name:This Is Me - The 3D Concert Experience
preview song:null
album:Music from the 3D Concert Experience
****************************
2
******LIRI SAYS******
artist(s):The Band
song name:This Wheels on Fire - Concert Version
preview song:https://p.scdn.co/mp3-preview/0217263dfa1ea57be150bdf63d2a9de68b62b82a?cid=c77d3cc955f8427e8a2479988e7b7abd
album:The Last Waltz
****************************
3
******LIRI SAYS******
artist(s):The Airborne Toxic Event,The Calder Quartet
song name:This Losing - Live From Walt Disney Concert Hall
preview song:null
album:All I Ever Wanted: The Airborne Toxic Event - Live From Walt Disney Concert Hall featuring The Calder Quartet
****************************
4
******LIRI SAYS******
artist(s):Glee Cast
song name:Born This Way (Glee Cast Concert Version)
preview song:https://p.scdn.co/mp3-preview/56c5fbdfe3a8172e449b08cadfa5d7e202bbf794?cid=c77d3cc955f8427e8a2479988e7b7abd
album:Glee The 3D Concert Movie (Motion Picture Soundtrack)
****************************
Example: Run command "movie-this".

       $ node liri.js movie-this <name of movie>

        Output: The system will display information associated with the movie such as;

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

       $ node liri.js movie-this 'Rush Hour'

this is loaded
Title:Rush Hour
Year:1998
Rated:PG-13
IMDB Rating:7.0
Country:USA
Language:English, Cantonese, Mandarin
Plot:A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul's kidnapped daughter, while trying to arrest a dangerous crime lord along the way.
Actors:Ken Leung, Jackie Chan, Tom Wilkinson, Tzi Ma
Rotten tomatoes rating:undefined
Rottentomatoes URL:undefined

Example: Run command "do-what-it-says"

 $ node liri.js do-what-it-say


 Output:  Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     $ node liri.js do-what-it-says
this is loaded
spotify-this-song,"I Want it That Way"
0
******LIRI SAYS******
artist(s):Niall Horan,RTE Concert Orchestra
song name:This Town feat. The RTÉ Concert Orchestra - Live
preview song:null
album:Flicker Featuring The RTÉ Concert Orchestra (Live)
****************************
1
******LIRI SAYS******
artist(s):Jonas Brothers,Demi Lovato
song name:This Is Me - The 3D Concert Experience
preview song:null
album:Music from the 3D Concert Experience
****************************
2
******LIRI SAYS******
artist(s):The Band
song name:This Wheels on Fire - Concert Version
preview song:https://p.scdn.co/mp3-preview/0217263dfa1ea57be150bdf63d2a9de68b62b82a?cid=c77d3cc955f8427e8a2479988e7b7abd
album:The Last Waltz
****************************

Edit the text in random.txt to test out the feature for movie-this and concert-this.

```random.txt
* movie-this, "Matrix"

 node liri.js do-what-it-says
this is loaded
movie-this, "Matrix"
Title:The Matrix
Year:1999
Rated:R
IMDB Rating:8.7
Country:USA
Language:English
Plot:A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.
Actors:Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving
Rotten tomatoes rating:undefined
Rottentomatoes URL:undefined

TECHNOLOGIES USED

* Nodejs
* Javascript
* Node packages
    - File System(fs)
    - Request
    - Moment
    - Dotenv
    - Axios
    - Node-spotify-API
* API used
    - Bands in Town
    - OMDB
* GitHub   

References: Youtube videos, GitHub repositories and UM Coding Boot Camp instructions



