/* Homework #1: Data types  */

/* This is a javascript file and it ust console logging different attributes of my favourite song  */

// Constructor 
function Song(SongName,Artist,durationInSeconds,SongWriters,Producers,releaseYear,genre,albumName,lyrics,otherSongsInAlbum){
    // initilization of keys of the object 
    this.SongName = SongName;
    this.Artist = Artist;
    this.durationInSeconds = durationInSeconds;
    this.SongWriters = SongWriters;
    this.Producers = Producers;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.albumName = albumName;
    this.lyrics = lyrics;
    this.otherSongsInAlbum = otherSongsInAlbum;
    // methods for printing various attributes of the object
    this.getSongName = function(){
        console.log("Name of the song : "+this.SongName);
    };
    this.getArtist = function(){
        console.log("Name of the artist : "+this.Artist);
    };
    this.getDurationInSeconds = function(){
        console.log("Song Duration : "+this.durationInSeconds);
    };
    this.getSongWriters = function(){
        console.log("Writers of the song : "+this.SongWriters);
    };
    this.getSongProducers = function(){
        console.log("Producers of the song : "+this.Producers);
    };
    this.getReleaseYear = function(){
        console.log("Release year of the song : "+this.releaseYear);
    };
    this.getGenre = function(){
        console.log("Genre of the song : "+this.genre);
    };
    this.getAlbumName = function(){
        console.log(SongName + " is in the album " +this.albumName);
    };
    this.getLyrics = function(){
        console.log("Part of the lyrics : "+this.lyrics);
    };
    this.getOtherSongsInAlbum = function(){
        console.log("Other songs in the "+this.albumName +" are : "+this.otherSongsInAlbum);
    };
}
var SongName = "Runaway"; // name of the song
var Artist = "Aurora";// name of the artist who sang the song
var durationInSeconds = 248; // 248 seconds is the duration of the song 
var SongWriters = ["Aurora Aknes","Magnus Skylstad"];// Array to store Names of the song writers
var Producers = ["Odd Martin","Magnus Skylstad"]; // Array to store Names of the song producers 
var releaseYear = 2015;// year the song released 
var genre = "pop"; // genre of song 
var albumName = "All My Demons Greeting Me As Friend";
var lyrics = "I was listenin' to the ocean I saw a face in the sand But when I picked it up Then it vanished away from my hands, down ......."; // lyrics of the song : Runaway
var otherSongsInAlbum = ["Conqueror","Running Away with the wolves","Lucky","Winter Bird","Warrior","Murder Song","Home","Under Water","Black Water Lillies","Half The World Away","Nature Boy","Wisdom Cries"]; // other songs in the album : running with the wolves 

// declaring the object . 
var FavouriteSong = new Song(SongName,Artist,durationInSeconds,SongWriters,Producers,releaseYear,genre,albumName,lyrics,otherSongsInAlbum);

FavouriteSong.getSongName();
FavouriteSong.getArtist();
FavouriteSong.getDurationInSeconds();
FavouriteSong.getSongWriters();
FavouriteSong.getSongProducers();
FavouriteSong.getReleaseYear();
FavouriteSong.getGenre();
FavouriteSong.getAlbumName();
FavouriteSong.getLyrics();
FavouriteSong.getOtherSongsInAlbum();



