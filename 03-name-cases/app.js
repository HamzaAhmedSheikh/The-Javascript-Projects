// 3: Name Cases:
// Store a person’s name in a variable,
// and then print that person’s name in lowercase,
//  uppercase, and titlecase.

let my_name = 'Hamza';
let date = '1/10/22';


let person_name = 'Hamza'

// person’s name in lowercase
console.log('person_name in lowerCase ==> ', person_name.toLowerCase())
// person’s name in uppercase
console.log('person_name in upperCase ==> ', person_name.toUpperCase())

// person’s name in titlecase

function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}
console.log(toTitleCase("HAMZA"));

// cd 03-name-cases && node app.js