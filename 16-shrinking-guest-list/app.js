//15. Shrinking Guest List: 

/**************** some points of this excersie *********************************/
// You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.

// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them 
// know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know 
// they’re still invited.

// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.
/***********************************************************************************/

let reinvitations = ['Sameer', 'Hamza', 'Ahmed', 'Waqar', 'Badar', 'AZ']

console.log("I can invite only two people")

console.log('I am sorry you are not invited to the dinner ==>', reinvitations.pop(0))
console.log('I am sorry you are not invited to the dinner ==>', reinvitations.pop(1))
console.log('I am sorry you are not invited to the dinner ==>', reinvitations.pop(2))
console.log('I am sorry you are not invited to the dinner ==>', reinvitations.pop(3))

console.log("you guys are still invited", reinvitations[0], reinvitations[1]) //loop

reinvitations.pop(0)
reinvitations.pop(1)

console.log('empty array ==> ', reinvitations);

// cd 16-shrinking-guest-list && node app.js