// 24:- More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let test = "equal"
console.log(test === "equal")
console.log(test !== "equal")

test="equal"
console.log("===> lower-case-test", test.toLowerCase() === "equal")
console.log("===> upper-case-test", test.toUpperCase() === "equal")
console.log('\n');

let req_top = "mashroom";

if (req_top !== "bbq") {
  console.log('ok its done');
} else {
  console.log('sorry');
}

if (req_top === "bbq") {
  console.log("ok its done")
 } 
 else {
  console.log("sorry")
}

let value = 10
console.log(value > 10)
console.log(value < 10)
console.log(value <= 10)
console.log(value >= 10)
console.log('\n');
console.log(value === 10)
console.log(value !== 10)
console.log('\n');



let x = 6;
let y = 3;

console.log(x == 5 || y == 5) 
console.log(x == 6 || y == 3);
console.log('\n');

let num = 8

console.log(num === 8); // true
console.log(num === '2'); // false

let a = true, b = false;

console.log('&& ==> ', a && a); // true
console.log('&& ==> ', a && b);  // false

console.log('|| ==>', a || b); // true
console.log('|| ==>', b || b); // false


console.log('\n');

if(x < 10 && y > 1) {
  console.log('true ==> ',true)
} else {
  console.log('false ==> ', false);
}

if(x < 10 && y < 1) {
  console.log('true ==> ', true);
} else {
  console.log('false ==> ', false);
}

console.log('\n');
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('is mango available?', fruits.includes("Mango"))
console.log('search fruit', fruits.includes("Banana", 3))
console.log('search fruit', fruits.includes("Orange", 1))


// cd 23-more-conditional-tests && node app.js