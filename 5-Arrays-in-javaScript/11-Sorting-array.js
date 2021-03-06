// const numbers = [2, 3, 1];
// numbers.sort()
// console.log(numbers); // 1 2 3

// numbers.reverse();
// console.log(numbers);

const courses = [{
        id: 1,
        name: 'Node.js'
    },
    {
        id: 2,
        name: 'Javascript'
    }
]

courses.sort((a, b) => {
    // a < b return -1
    // a > b return 1
    // a === b return 0

    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()

    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
})
console.log(courses);