// 9: Names: 

let my_name = 'Hamza';
let date = '1/10/22';

// store the names of a few of your friends in a array called names
let names = ['Hamza', 'Ahmed', 'Badar']

// Print each person’s name by accessing each element in the list, one at a time
for (let name = 0; name < names.length; name++) {
    let friend_name = names[name];
    console.log('friend_name ', friend_name);    
}
// cd 10-names && node app.js