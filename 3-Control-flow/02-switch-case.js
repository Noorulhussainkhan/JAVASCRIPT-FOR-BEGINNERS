
let role = 'moderator';

switch(role) {
    case 'guest':
        console.log('Guest User')
        break;

    case 'moderator':
        console.log('Moderator User')
        break;
    default:
        console.log('Unknown User')
}



// We can also write this in if statment

if(role === 'guest') {
    console.log('Guest User')
} else if (role === 'moderator') {
    console.log('Modurator User')
} else {
    console.log('Unknown User')
}