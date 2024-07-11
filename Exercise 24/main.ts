// Question:24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//    ANSWER*

// • Tests for equality and inequality with strings
let Mango = "Mango"

console.log(" Is Mango is equal to Mango?");
console.log(Mango == "Mango");
console.log("\n Is Mango is not equal to Mango?");
console.log(Mango != "Mango");
 
// • Tests using the lower case function
let Apple = "apple";

let uppercaseApple = "APPLE";
console.log("\n Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple"); 

// • Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty  = 20;

console.log("\n Is ten equal to twenty ?");
console.log(ten == twenty);
console.log("\n Is twenty equal to 20 ?");
console.log(twenty == 20);

console.log("\n Is ten greater than zero?");
console.log(ten > 0);
console.log("\n Is twenty less than ten?")
console.log(twenty < 10);

console.log("\n Is ten greater than or equal to 5? ");
console.log(ten >= 5);
console.log("\n Is twenty is less than or equal to ten?");
console.log(twenty <= 10);

// • Tests using "and" and "or" operators
// using and
console.log("\n Is twenty not equal to ten and ten is less than twenty?");
console.log(twenty != 10 && ten < 20);
console.log("\n Is twenty not equal to ten and ten is greater twenty? ");
console.log(twenty != 10 && ten > 20);
// using or
console.log("\n Is ten is less than twenty or twenty is not equal to 20? ");
console.log(ten < 20 || twenty != 20);
console.log("\n Is ten is greater than 50 or ten is not equal to ten? ");
console.log(ten > 50 || ten != 10); 

// • Test whether an item is in a array
let grocery = ["Sugar","Rice","Oil"];
console.log("\n Is Rice include in my grocery array?");
console.log(grocery.includes("Rice"));

// • Test whether an item is not in a array
console.log("\n Is Oil not include in my grocery array? ");
console.log(!grocery.includes("Oil"));