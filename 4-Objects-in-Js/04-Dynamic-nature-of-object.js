/* Delete keyWord will delete the value of the object 
    -- Know you mit be thinking that (const) value is did not change so how you change the value of the object
    -- The answer is we are not assining again the (const) but we just giving a new value to the (const)
    -- we can't write (const) like this =>  const circle = {}   // That will give us an error.
*/


const circle = {
    radius: 1
}

circle.color = 'yellow'
circle.draw = function () {}

delete circle.color;
delete circle.draw;
delete circle.radius;
console.log(circle)