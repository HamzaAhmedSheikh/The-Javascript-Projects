// Magicians:
//  Make a array of magician’s names.
//  Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

function show_magicians(magicians) {    
    for (let magician in magicians) {
       console.log('magicians ==> ', magicians[magician]);
    }
  }
 
  let magicians = ['Harry Houdini', 'Penn & Teller', ' David Copperfield']
  show_magicians(magicians)

// cd 40-magicians && node app.js  