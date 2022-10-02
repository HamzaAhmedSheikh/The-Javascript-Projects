// Large Shirts:

//  Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love JavaScript. Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.

function make_shirt(size = "large", message = "I love JavaScript.") {
    // Summarize the t-shirt that's going to be made.
    console.log(`\nI'm going to make a ${size} t-shirt.`)
    console.log(`It will say, ${message}`)
 }
 
 make_shirt()
 make_shirt(size = 'medium')
 make_shirt('small', 'Experience is the name everyone gives to their mistakes.')

// cd 36-large-shirts && node app.js