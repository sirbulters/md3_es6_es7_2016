function getCar(name, model, year) {
    return {
        // with property value shorthand
        // syntax, you can omit the property
        // value if key matches variable
        // name
        name, // same as make: make
        model, // same as model: model
        year, // same as value: value

        // computed values now work with
        // object literals
        ['name' + name]: true,

        // Method definition shorthand syntax
        // omits `function` keyword & colon
        depreciate() {
            this.value -= 2500;
        }
    };
}
let car = getCar('Honda', 'Civic', '1998');
let car2 = getCar('asd', 'asd', '1998');

// output: {
//     make: 'Kia',
//     model:'Sorento',
//     value: 40000,
//     depreciate: function()
// }
console.log(car);

car.depreciate();
car2.depreciate();

// output: 37500
console.log(car.value);