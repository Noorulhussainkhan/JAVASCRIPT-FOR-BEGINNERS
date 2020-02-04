// Hoisting is the process of moving function decleration to the top of the file
// And it is done automaticaly by the javaScript that is excuting this code.
// we can call function decleration at the top of the function. BUT!!!!!!
// we can not call the function expression at the top of the function

// Function Decelaration

walk() // we can define here cuzz this is a function decleration
function walk() {
    console.log('walk')
}

// Function Expression

// IT WILL GIVE US AN ERROR.
// run()
// let run = function run() {
//     console.log('run')
// }