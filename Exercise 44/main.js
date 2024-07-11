// Question : 44
// define a function with a rest parameters that accept item argument representing sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich\n");
}
// call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Tomato");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Tomato", "Egg", "Cheese");
