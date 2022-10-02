//13: Changing Guest List: 
// You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.

/**************** three points of this excersie ****************************/
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
/***************************************************************************/

let reinvitations = ["Hamza", "Ahmed", "Badar"]

//  Adding a print call to tell who won't be coming   
console.log("can't make it to the party", reinvitations[2])

// removing the person that won't be coming
console.log('pop ==> ', reinvitations.pop(2))

// replacing the name of the guest who can’t make it with the name of the new person
reinvitations.push("AZ")

// Print a second set of invitation messages, one for each person who is still in your list
for (let _invite in reinvitations) {
   console.log("Welcome to my dinner party ", reinvitations[_invite])
}

// cd 14-changing-guest-list && node app.js
