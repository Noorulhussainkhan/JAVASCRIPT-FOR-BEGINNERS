// Testing the Elements of an Array

const numbers = [1, 2, 3]

// *********** EVERY ***********
// const allPositive = numbers.every(value => {
//     return value >= 0
// });

// console.log(allPositive);

// *********** SOME ***********
const alLeastOnePositive = numbers.some(value => {
    return value >= 0
});

console.log(alLeastOnePositive);