// Question : 45
// Define a function to create a car object with optional option.
function create_Car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        // Initialize a car object with manufacture and model
        manufacture: manufacture,
        model: model
    };
    // Add additional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = create_Car("Toyota", "Corrolla", "color:Black", "Sunroof:true", "Year:2024");
// Print the variable
console.log(my_car);
