// const address = {
//     street: "a",
//     city: 'b',
//     zipCode: "c"
// }

// Factory Function
function factory(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

factory('a', 'b', 'c')


// Constructor Function
function Constructor(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

const another = new Constructor('a', 'b', 'c')
console.log(another);