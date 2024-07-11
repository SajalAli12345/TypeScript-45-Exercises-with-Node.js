// Question : 40
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three function and creating 3 variables with different values
// print values of our objects created by function.
var album1 = make_album("Asad", "Album no 1");
console.log(album1);
var album2 = make_album("Salar", "Album no 2");
console.log(album2);
var album3 = make_album("Sara", "Album no 3", 10);
console.log(album3);
