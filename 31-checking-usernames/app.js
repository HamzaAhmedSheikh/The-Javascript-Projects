// Checking Usernames: Do the following to create a program that simulates 
// how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username.
//  If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive.
//  If 'John' has been used, 'JOHN' should not be accepted.


// Make a list of five or more usernames called current_users.
let current_users = ['eric', 'willie', 'Hamza', 'admin', 'erin', 'ahsan']
// Make another list of five usernames called new_users
let new_users = ['sarah', 'Willie', 'hamza', 'PHIL', 'Iona', 'Ahsan']


for (let new_user in new_users) {
    let current_user = current_users[new_user].toLowerCase()
    let check_new_user = new_users[new_user].toLowerCase()  
 
    if (current_user === check_new_user) {
       console.log(`Sorry ${current_user} , that name is taken.`)
    }
    else {
       console.log(`Great, ${current_user} is still available.`);
    }
 }

// cd 31-checking-usernames && node app.js

