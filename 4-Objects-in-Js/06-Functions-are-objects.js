function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw')
    }
}

Circle.call({}, 1)

const another = new Circle(1);