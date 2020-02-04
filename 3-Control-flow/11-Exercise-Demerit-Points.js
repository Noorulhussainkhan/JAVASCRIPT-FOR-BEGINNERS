// Speed limit = 70
// If a car is driving under the speed limimte we will get OK message
// For every 5 km we will get point: 1
// In this exercise you will be using Math.floor()
// If a driver get more the 12 points -> Licence will be suspended

checkSpeed(70)

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint)
        if (points >= 12) {
            console.log('License suspended');
        } else {
            console.log('Points', points);
        }
    }
}