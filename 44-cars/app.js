// Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.

function make_car(manufacturer, model) {
    // Write a function that stores information about a car in a Object. 
    // The function should always receive a manufacturer and a model name
    let car_dict = {
       'manufacturer': manufacturer,
       'model': model,
       // It should then accept an arbitrary number of keyword arguments.
       'color': arguments[2],
       'owner': arguments[3],
       'number_plate': arguments[4],
    }  

    return car_dict
 
 }
 
 //  Call the function with the required information and two other name-value pairs,
 //  such as a color or an optional feature
 
 let my_outback = make_car('subaru', 'outback', 'blue', 'Hamza', 'hmh-1009')
 
 console.log(my_outback);
 
 let my_accord = make_car('honda', 'accord', 'red', 'Badar', '9061')

 console.log(my_accord);
        
  // cd 44-cars && node app.js  