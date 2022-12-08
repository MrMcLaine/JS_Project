'use strict'

//1

let admin, name;

name = 'John';
admin = name;

//console.log(admin);


//2

let login = 'Admin';
let password = 'TheMaster';

if (login == 'Admin') {
    if (password == 'TheMaster') {
        console.log('Welcome!');
    } else if (password == 'Cancel') {
        console.log('Cancelled');
    } else {
        console.log('Wrong password');
    }
} else if (login == 'Cancel') {
    console.log('Cancelled');
} else {
    console.log('I don`t know you');
}

//3

switch (login) {
    case 'Admin':
        switch (password) {
            case 'TheMaster':
                console.log('Welcome!');
                break;
            case 'Cancel':
                console.log('Cancelled');
                break;
            default:
                console.log('Wrong password');
        }
        break;
    case 'Cancel':
        console.log('Cancelled');
        break;
    default:
        console.log('I don`t know you');
}


