const person = {
    firstName: 'Noor ul hussain',
    lastName: 'khan',
    set fullName() {
        if (typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ')
        if (pars.lastName !== 2)
            throw new Error('Enter a first and last name.')

        this.firstName = parts[0]
        this.lastName = parts[1]
    },
}
try {
    person.fullName = '';
} catch (e) {
    alert(e)
}
console.log(person);