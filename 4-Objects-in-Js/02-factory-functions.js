// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//             console.log('drwa')
//     }
// };

// circle.draw() 



// <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>
// Factory Function
function createCircle(radius, location) {
    return {
        radius,
        draw() {
            console.log('drwa')
        },
    };
}

const circle1 = createCircle(1)
console.log(circle1)