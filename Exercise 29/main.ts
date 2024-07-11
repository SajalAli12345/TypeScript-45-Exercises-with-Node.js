// Question : 29
// Favorite Fruit: Make a array of your favorite fruits,
//  and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
    // ANSWER *

let favorite_fruits:string[] = ["Mango","Orange","Strawberry"];

if(favorite_fruits.includes("Mango")){
    console.log("I Really like Mangos!");
}
if(favorite_fruits.includes("Orange")){
    console.log("I Really like Oranges!");
}
if(favorite_fruits.includes("Apple")){
    console.log("I Really like Apple!");
}
if(favorite_fruits.includes("Strawberry")){
    console.log("I Really like Strawberrys!");
}
if(favorite_fruits.includes("Banana")){
    console.log("I Really like Bananas!");
} 