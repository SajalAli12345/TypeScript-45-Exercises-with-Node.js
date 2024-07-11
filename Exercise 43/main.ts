// Question : 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// ANSWER *

// Define function to make show magicians names
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name)) 
}
// Function to make magicians great through .map(). it will modify array.
function make_great(magicians:string[]){
    return magicians.map(name => `The great ${name}`) 
}

// define an array of magician names
let magicians_name = ["Ertugrul","Usman","Orhan"];

// making a copy of original function through .slice() function
let copy_magicians_name = magicians_name.slice()

// modify the copied array to include "the great" with their names
let copy_great_magicians = make_great(copy_magicians_name);

//Show both arrays Copied and Original

// Original
console.log("Original Array\n")
show_magicians(magicians_name);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_magicians_name);