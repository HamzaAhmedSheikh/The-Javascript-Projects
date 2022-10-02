// 5: Stripping Names: 

let my_name = 'Hamza';
let date = '1/10/22';


//  Print the name once, so the whitespace around the name is displayed.


// Store a person’s name, and include some whitespace characters at the beginning and end of the name.
let user_name = "  Ahmed   ";
console.log('white space ==> ', user_name);

// Make sure you use each character combination, "\t" and "\n", at least once.
let person_name = "\tHamza\n";
console.log('white space ==>  ', person_name);

let _user_name = '\nAZ\tAhmed';
console.log('white space-3 ==> ', _user_name);

// print the name after striping the white spaces
let trim_the_white_space = person_name.trim()
console.log(trim_the_white_space); 

// cd 06-stripping-names && node app.js