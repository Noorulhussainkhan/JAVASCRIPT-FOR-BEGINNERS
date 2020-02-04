// String Primitives
const message = ' This is my first message '
console.log(message.length)
console.log(message.length[0])
console.log(message.includes('my'))
console.log(message.startsWith('This'))
console.log(message.endsWith('e'))
console.log(message.indexOf('my'))
console.log(message.replace('first', 'second'))
console.log(message.toUpperCase(message))
console.log(message.toLowerCase(message))
console.log(message.trim()) // Remove Spaces
console.log(typeof message); // String


// String Object
const another = new String('hi')
console.log(typeof another); // Object