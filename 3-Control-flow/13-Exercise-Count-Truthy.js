//  Count Truthy

function countTruthy(array) {
    let count = 0
    for (let value of array) {
        if (value) {
            count++
        }
        return count;
    }
}

// console.log(countTruthy([1, 2, 3, null, undefined, 0, '']));