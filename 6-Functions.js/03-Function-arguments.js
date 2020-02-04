// we can remove the perametors because we have the (argument) obj passed in the func
function sum(a, b) {
    // console.log(arguments); // Every Function in js has (arguments) object
    let total = 0
    for (let value of arguments)
        total += value;

    return total
}

// console.log(sum(1,2))
// console.log(sum()) // <= It will give us a (NaN)
console.log(sum(1, 2, 3, 4, 5)) // Only the first two arguments are use