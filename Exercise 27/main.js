// Question : 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//    ANSWER
var alienColor1 = "Green";
if (alienColor1 === "Green") {
    console.log("(Version 1) You should shot down Green the player earned 5 points.");
}
else if (alienColor1 === "Yellow") {
    console.log("You should shot down yellow the player earned 10 points.");
}
else if (alienColor1 === "Red") {
    console.log("You should shot down red the player earned 15 points.");
}
var alienColor2 = "Yellow";
if (alienColor2 === "Green") {
    console.log("You should shot down Green the player earned 5 points.");
}
else if (alienColor2 === "Yellow") {
    console.log("(Version 2) You should shot down yellow the player earned 10 points.");
}
else if (alienColor2 === "Red") {
    console.log("You should shot down red the player earned 15 points.");
}
var alienColor3 = "Red";
if (alienColor3 === "Green") {
    console.log("You should shot down Green the player earned 5 points.");
}
else if (alienColor3 === "Yellow") {
    console.log("You should shot down yellow the player earned 10 points.");
}
else if (alienColor3 === "Red") {
    console.log("(Version 3) You should shot down red the player earned 15 points.");
}
