// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries,
// cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.

let mountains = ['Mount Everest', 'Himalayas', 'Table Mountain', 'Swiss Alps']

for (let mountain = 0; mountain < mountains.length; mountain++) {
    let mountains_list = mountains[mountain];
    
    console.log('mountain ==> ', mountains_list);
}

// cd 19-think-of-something && node app.js