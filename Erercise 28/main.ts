// Question :28
// Stages of Life: Write an if-else chain that determines a person’s stage of life.
//  Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
//     ANSWER *

let person_Age = 17;

if(person_Age < 2){
    console.log("You are a Baby.");
}
else if(person_Age >= 2 && person_Age < 4){
    console.log("You are a Toddler.");
}
else if(person_Age >= 4 && person_Age < 13){
    console.log("You are a Kid.");
}
else if(person_Age >= 13 && person_Age < 20){
    console.log("You are a Teenagers.");
}
else if(person_Age >= 20 && person_Age < 65){
    console.log("You are a Adults.");
}
else if(person_Age >= 65){
    console.log("You are a Elder.");
} 