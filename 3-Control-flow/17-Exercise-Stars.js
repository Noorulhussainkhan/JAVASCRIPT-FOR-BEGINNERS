// Stars


function showStars(rows) {
    for (let row = 0; row < rows; row++) {
        let pattren = ''
        for (let i = 0; i < row; i++)
            pattren += '*'
        console.log(pattren);
    }
}

console.log(showStars(10))