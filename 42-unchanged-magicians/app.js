// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store
// it in a separate array. Call show_magicians() with each array to show that 
// you have one array of the original names and one array with 
// the Great added to each magician’s name.

function show_magicians(magicians) {
    for (let magician in magicians) {
        console.log('show-the-magicians ==>', magicians[magician])
    }
}

function make_great(magicians) {
    let new_arr = []
    // return the new array and store it in a separate array. 
    for (let magic = 0; magic < magicians.length; magic++) {
        let great_magician = magicians[magic] + ' the Great'
        // console.log(magicians[magic], `The Great`);
        console.log('show-the-great-magicians ==> ', great_magician);
        new_arr.push(great_magician)
    }

    for (let index = 0; index < new_arr.length; index++) {
        let magicians_arr  = new_arr[index];        

    }

    // console.log('element ==> ', new_arr);


}

magicians = ['Harry Houdini', 'David Blaine', 'Teller', 'Lance Burton']
show_magicians(magicians)
console.log("\n")
make_great(magicians)


// cd 42-unchanged-magicians && node app.js
