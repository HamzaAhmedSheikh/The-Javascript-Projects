// Large Shirts:
//  Modify the make_shirt() function so that shirts are large by default
//  with a message that reads I love JavaScript.

// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.

function make_shirt(size, message) {
    // Summarize the t-shirt that's going to be made.
    console.log(`I'm going to make a ${size} t-shirt.`)
    console.log(`It will say, ${message}`)
 }
 
 make_shirt('large', 'I love Javascript!')

//  cd 35-t-shirt && node app.js