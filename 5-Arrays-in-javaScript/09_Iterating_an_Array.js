const numbers = [1, 2, 3]

for (let number of numbers)
  console.log(number)

// numbers.forEach(function (number) {
//   console.log(number)
// })


// Using Arrow function
numbers.forEach(number => console.log(number))