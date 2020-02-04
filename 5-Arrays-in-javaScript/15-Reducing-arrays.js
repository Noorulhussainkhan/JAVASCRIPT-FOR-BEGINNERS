const numbers = [1, -1, 2, 3]

// IF WE HAVE 0 AT THE ENT OF THE FUNCTION
// // a = 0, c = 1 => a = 1
// // a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// // a = 2, c = 3 => 5

// numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)

// console.log(sum);


// IF WE HAVE 0 AT THE ENT OF THE FUNCTION
// // a = 1, c = -1 => a = 0
// // a = 0, c = 1 => a = 2
// // a = 2, c = 3 => a = 5

numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
)
console.log(sum);