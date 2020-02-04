// Another pattren to create object

// CONSTRUCTOR FUNCTIONS
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const circle = new Circle(1) // When we use the new operator 3 things happen =>
// This operator first create a empty object it will set (this) to point to this object and finally it will return the object form function.