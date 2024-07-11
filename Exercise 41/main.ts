// Question : 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

// ANSWER

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
} 

let magicians_name = ["Harry","Laraib","Ashar"];

show_magicians(magicians_name); 