// In javaScript we have two type of (TYPES)
// Primitive Types <= Primitive are copyed by their (values)
// Referance Types <= Object are copyed by ther (Reference)

// Primitive Types / VALUE TYPES
// Number
// String
// Boolean
// Symbols
// undefined
//  Null


// REFERANCE TYPES
// Objects
// Functions
// Arrays



// E.G 1
// let x = { value: 10};
// let y = x;

// x.value = 20;
// console.log(x)
// console.log(y)


// E.G 2
// Primitive Type
let number = 10;

function increase(number) {
    number++
}


increase(number);
console.log(number)



// Reference Type
let obj = {
    value: 10
};

function increase(obj) {
    obj.value++
}
increase(obj);
console.log(obj)