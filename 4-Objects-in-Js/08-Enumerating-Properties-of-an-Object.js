// Enumerating Properties of an Object

const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
}

for (let key in circle)
    console.log(key, circle[key]);

// For of loop can only be use in iterable
// ERROR
// for (let key of circle)
//     console.log(key);

for (let key of Object.keys[circle])
    console.log(key);

// entries will convert object into array
for (let entry of Object.entries[circle])
    console.log(entry);

if ('radius' in circle) console.log('YES');