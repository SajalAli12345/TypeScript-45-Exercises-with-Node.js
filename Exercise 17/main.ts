// Question :17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying 
// that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know you’re sorry 
// you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.

let shrinkGuestList = ["Sajal","Aisha","Madiha"];

console.log(`${shrinkGuestList[1]} ,Is not coming`);

shrinkGuestList.splice(1,1,"Anusha")

console.log("Hello Everyone! We found a bigger dinner table. lets call some more guest");

// unshift function 
shrinkGuestList.unshift("Saboor")
//  push function
shrinkGuestList.push("Amna")
// splice 
let middleGuest: number= Math.floor(shrinkGuestList.length/2);
shrinkGuestList.splice(middleGuest,0,"Mariam");

shrinkGuestList.forEach((moreinvitation) =>
     console.log(`Hello ${moreinvitation}, Would you like to dinner with me?`));

console.log("Unfortunetly,new dinner table wont arrive in time for a dinner,so I have space for onlt 2 guest for dinner ");
 while(shrinkGuestList.length > 2){
    let removeGuest=shrinkGuestList.pop();
    console.log(`Sorry, ${removeGuest} I can not invite you to dinner`)
 }
 console.log("Invitation to the last to 2 guests");
 shrinkGuestList.forEach(guestinvitation => console.log(`Salam ${guestinvitation} you are still invited for dinner`))  
 
 shrinkGuestList.pop();
 shrinkGuestList.pop();

 console.log(shrinkGuestList, "Empty List");