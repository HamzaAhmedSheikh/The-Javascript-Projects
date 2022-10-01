// 5: Stripping Names: 

//  Print the name once, so the whitespace around the name is displayed.


// Store a person’s name, and include some whitespace characters at the beginning and end of the name.
let user_name = "  Ahmed   ";
// Make sure you use each character combination, "\t" and "\n", at least once.
let person_name = " \tHamza\n ";
// print the name after striping the white spaces
let trim_the_white_space = person_name.trim()

console.log('white space ==> ', person_name);
console.log('white space ==> ', user_name);
console.log('\n');
console.log(trim_the_white_space);