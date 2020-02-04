// Address Object

const address = {
    street: "a",
    city: 'b',
    zipCode: "c"
}

function showAddress(address) {
    for (let keys in address) {
        console.log(keys, address[keys]);
    }
}

showAddress(address)