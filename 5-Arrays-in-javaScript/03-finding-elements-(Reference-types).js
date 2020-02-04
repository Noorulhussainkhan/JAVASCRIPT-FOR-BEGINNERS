const courses = [{
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
]

// The (include) method will not help us here.
// console.log(courses.includes({id: 1, name: 'a'}))  // False  

const course = courses.find(function (course) {
    return course.name === 'a';
})

console.log(course)