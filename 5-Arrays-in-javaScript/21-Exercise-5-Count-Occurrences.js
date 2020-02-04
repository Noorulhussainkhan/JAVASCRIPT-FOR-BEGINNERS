const numbers = [1, 2, 3, 4, 1]
const count = countOccurrence(numbers, -1)

console.log(count);

function countOccurrence(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++
    // return count;

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}