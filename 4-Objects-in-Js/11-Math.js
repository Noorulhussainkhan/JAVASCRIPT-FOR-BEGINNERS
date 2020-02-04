// Every Time when we reload the page it will give us random number
console.log(Math.random());

// Max will return the maxmium value
console.log(Math.max(2, 34, 34, 65, 6, 123, 76));

// Max will return the minimum value
console.log(Math.min(2, 34, 34, 65, 6, 123, 76));

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}