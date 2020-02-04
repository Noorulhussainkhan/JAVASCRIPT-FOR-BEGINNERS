// const numbers = [1, 2, 3, 4];

// console.log(numbers.indexOf('a')); //if we don't have element so it will show us (-1) value 
// console.log(numbers.indexOf(1));

// If we have two or more then two so it will show us the last one value.
const numbers = [1, 2, 3, 1, 4];
console.log(numbers.lastIndexOf(1));


console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1))