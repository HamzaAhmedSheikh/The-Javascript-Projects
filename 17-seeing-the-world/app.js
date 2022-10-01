// 18:Seeing the World: Think of at least five places in the world you’d like to visit.


// • Store the locations in a array. Make sure the array is not in alphabetical order.
let list_to_visit = ["London", "Paris", "Turkey", "Egypt", 'Amsterdam']

// Print your array in its original order.
console.log(list_to_visit)

// Print your array in alphabetical order without modifying the actual list.
console.log('sorted array ==> ', [...list_to_visit].sort())

// Print your array in reverse alphabetical order without changing the order of the original list.
let reverse_array = [...list_to_visit].reverse();
console.log('reverse the array ==> ', reverse_array)

// Show that your array is still in its original order by printing it again.
console.log('original arr again ==> ', list_to_visit)

// Reverse the order of your list.
console.log('reverse the array again ==> ', reverse_array);
//  Print the array to show that its order has changed not done yet
console.log('original array ==> ', list_to_visit);

//  Reverse the order of your list again.
console.log('reverse the array again ==> ', reverse_array);
//  Print the list to show it’s back to its original order.
console.log('original array ==> ', list_to_visit)

// Sort your array so it’s stored in alphabetical order. 
// Print the array to show that its order has been changed.
console.log('sorted array ==> ', list_to_visit.sort());

//  Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.
console.log('reverse array ==> ', list_to_visit.reverse());


// cd 17-seeing-the-world && node app.js