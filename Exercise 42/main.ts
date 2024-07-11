// Question : 42
// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.

// ANSWER

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

// Call make_great function to modify magicians names
let great_magicians = make_great(magicians_name);
// call show_magicians that show modified list of magicians name
show_magicians(great_magicians); 