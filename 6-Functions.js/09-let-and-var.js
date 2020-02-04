// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

// function start() {
//     for (var i = 0; i < 5; ++) {
//         if (true) {
//             var color = 'red'
//         }
//     }
//     console.log(i);
// }

// start()

var color = 'red'
let age = 30

function sayHi() {
    console.log('hi');
}