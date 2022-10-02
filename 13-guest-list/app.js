// 12: Guest List: 
// If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them 
// to dinner.

let invitations = ["Hamza", "Ahmed", "Badar"]

for (let invite = 0; invite < invitations.length; invite++) {
    let invitation = invitations[invite];

    console.log("Welcome to my dinner party ", invitation)    
}
// cd 13-guest-list && node app.js
