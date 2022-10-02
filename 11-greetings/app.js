// 10:- Greetings:
//  Start with the array you used in Exercise 11,
//  but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same,
//  but each message should be personalized with the person’s name.

let names = ['Hamza', 'Ahmed', 'Badar']

// Print each person’s name by accessing each element in the list, one at a time
for (let name = 0; name < names.length; name++) {
    let friend_name = names[name];
    console.log('hello ', friend_name);    
}
// cd 11-greetings && node app.js
