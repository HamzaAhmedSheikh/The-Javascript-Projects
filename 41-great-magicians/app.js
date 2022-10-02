// Great Magicians: 
// Start with a copy of your program from Exercise 39. 
// Write a function called make_great() 
// that modifies the array of magicians by adding 
// the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.

 function show_magicians(magicians) {
    for (let magician in magicians) {
       console.log(magicians[magician])
    }
 }
 
 function make_great(magicians) {
    for (let magic = 0; magic < magicians.length; magic++) {
       console.log(magicians[magic], `The Great`);
    }
 
 }

 magicians = ['Harry Houdini', 'David Blaine', 'Teller', 'Lance Burton']
 show_magicians(magicians)
 console.log("\n")
 make_great(magicians)

 // cd 41-great-magicians && node app.js 