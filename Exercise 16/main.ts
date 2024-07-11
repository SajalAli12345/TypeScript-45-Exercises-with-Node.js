// Question : 16
// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, 
// one for each person in your list.

let moreGuestList = ["Sajal","Aisha","Madiha"];

console.log(`${moreGuestList[1]} ,Is not coming`);

moreGuestList.splice(1,1,"Anusha")

console.log("Hello Everyone! We found a bigger dinner table. lets call some more guest");

// unshift function 
moreGuestList.unshift("Saboor")
//  push function
moreGuestList.push("Amna")
// splice 
let middleGuest: number= Math.floor(moreGuestList.length/2);
moreGuestList.splice(middleGuest,0,"Mariam");

moreGuestList.forEach((moreinvitation) =>
     console.log(`Hello ${moreinvitation}, Would you like to dinner with me?`));