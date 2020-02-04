const numbers = [3, 4];

// Adding a new element at the (END)
numbers.push(5, 6)
console.log(numbers)

// Adding a new element at the (Beginnng)
numbers.unshift(1, 2)
console.log(numbers)

// Adding a new element at the (Middle)
numbers.splice(2, 0, 'a', 'b')  // <= we give the position to add new element or remove elements
console.log(numbers)
