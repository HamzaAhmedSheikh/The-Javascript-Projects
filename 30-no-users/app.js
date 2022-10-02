// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames = ['Hamza', 'Abdul Aziz', 'admin', 'Badar', 'Sameer']

usernames = []

if (usernames[0] === 'Hamza') {
    for (username in usernames) {
       if (usernames[username] == 'admin') {
 
          console.log("Hello admin, would you like to see a status report?")
       }
       else {
          console.log(`Hello ${usernames[username]}, thank you for loggin in again!`)
       }
    }
 } else {
    console.log("We need to find some users!");
 }

//  cd 30-no-users && node app.js