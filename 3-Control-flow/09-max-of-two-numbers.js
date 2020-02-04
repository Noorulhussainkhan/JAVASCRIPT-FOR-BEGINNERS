// Write a function that takes two numbers
// and return the maximum of the two

let number = max(1, 2)
console.log(number)

// function max(a, b) {
//     if (a < b) return a;
//     else return b;
// }

// REFECTRING THE FUNCTION
function max(a, b) {
    return (a > b) ? a : b
}