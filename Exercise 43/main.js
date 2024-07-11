// Question : 43
// Define function to make show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map(). it will modify array.
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// define an array of magician names
var magicians_name = ["Ertugrul", "Usman", "Orhan"];
// making a copy of original function through .slice() function
var copy_magicians_name = magicians_name.slice();
// modify the copied array to include "the great" with their names
var copy_great_magicians = make_great(copy_magicians_name);
//Show both arrays Copied and Original
// Original
console.log("Original Array\n");
show_magicians(magicians_name);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_magicians_name);
