// String Properties

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

const person = {
    name: 'Noor ul hussain',
    age: 17,
    isHuman: true, // lol's
}

showProperties(person)