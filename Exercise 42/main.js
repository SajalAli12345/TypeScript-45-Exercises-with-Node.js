// Question : 42
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magicians_name = ["Ertugrul", "Usman", "Orhan"];
var great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
