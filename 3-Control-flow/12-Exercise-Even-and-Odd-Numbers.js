// Even and Odd Numbers


// showNumbers(10)

// function showNumbers(limit) {
//     for (let i = 0; i < limit; i++) {
//         if (i % 2 === 0) {
//             console.log(i, 'EVEN');
//         } else {
//             console.log(i, 'ODD');
//         }
//     }
// }



// WE CAN ALSO WRITE THIS FUNCTION LIKE THIS
// THIS IS THE SHORTER WAY -- BUT THE UPPER ONE IS ALSO CORRECT

showNumbers(10)

function showNumbers(limit) {
    for (let i = 0; i < limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    }
}