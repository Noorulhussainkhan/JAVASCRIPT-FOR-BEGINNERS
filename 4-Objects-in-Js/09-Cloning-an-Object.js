// Cloning an Object

const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

// -- OLD WAY FOR CLONING OBJECTS
// const another = {}

// for (let key in circle)
//     another[key] = circle[key]

// console.log(another);


// NEWER WAY OF CLONING AN OBJECTS
// const another = Object.assign({}, circle)
// console.log(another);

//ANOTHER & NEWER WAY OF CLONING AN OBJECTS
const another = {
    ...circle
}
console.log(another);