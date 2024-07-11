// Question : 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// ANSWER*

// define a function with a rest parameters that accept item argument representing sandwich
function makeSandwich(...items:string[]){
    console.log("Making a sandwich with the following items: \n")

    items.forEach(singleItem => console.log(singleItem))

    console.log("\n Now Enjoy Sandwich\n");
} 

// call the function 3 times with 3 different number of arguments
makeSandwich("Chicken","Cheese","Mayo","Tomato");

makeSandwich("Bread","Butter");

makeSandwich("Bread","Butter","Mayo","Egg","Tomato","Egg","Cheese"); 