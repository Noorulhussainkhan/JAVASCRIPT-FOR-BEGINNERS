// Hour
// if the hour between 6am and 12pm: Good morning
// if it between 12pm and 6pm: Good afternoon
// otherWise: Good evening

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
    
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon')

} else {
    console.log('Good evening')
}