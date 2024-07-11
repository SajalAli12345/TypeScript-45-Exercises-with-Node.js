// Question : 33
//  ANSWER *   
var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_numbers_1 = ordinal_numbers; _i < ordinal_numbers_1.length; _i++) {
    var one_number = ordinal_numbers_1[_i];
    var ordinal_Ending = void 0;
    if (one_number === 1) {
        ordinal_Ending = "st";
    }
    else if (one_number === 2) {
        ordinal_Ending = "nd";
    }
    else if (one_number === 3) {
        ordinal_Ending = "rd";
    }
    else {
        ordinal_Ending = "th";
    }
    console.log("".concat(one_number).concat(ordinal_Ending));
}
