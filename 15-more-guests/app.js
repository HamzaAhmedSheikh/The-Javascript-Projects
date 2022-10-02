// 14: More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.

/**************** some points of this excersie ****************************/
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 

// • Use push() to add one new guest to the end of your list. 

// • Print a new set of invitation messages, one for each person in your list.

/***************************************************************************/

let reinvitations = ["Hamza", "Ahmed", "Badar"]

// add one new guest to the beginning of your array.
reinvitations.unshift('Sameer')

// add one new guest to the middle of your array
reinvitations.splice(3, 0, "Waqar")

reinvitations.push("AZ")
 


console.log('new_array ==> ', reinvitations);

for (let invite = 0; invite < reinvitations.length; invite++) {
    let add_more_guests = reinvitations[invite];    

    console.log('Welcome to my dinner party ==> ', add_more_guests);
}
 
console.log('People, just found a bigger table and more people will be joining us this evening');

// cd 15-more-guests && node app.js 