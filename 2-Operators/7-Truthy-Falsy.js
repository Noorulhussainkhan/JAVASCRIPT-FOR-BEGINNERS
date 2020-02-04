
// False (false)
    // Undefined
    // null
    // 0
    // false
    // ''
    // NaN

// Anything that is not falsy that is truthy

// Short-ciruiting
// console.log(false || 1 || 2) // <= it will show us 1


let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor)