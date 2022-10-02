// City Names:
//  Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this: "Lahore, Pakistan"

// note:- Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city, country) {
    let message = `${city} ${country}`
 
    return message
 }
 
 let places_to_visit = city_country('South Island', 'New Zealand')
 console.log('1:-', places_to_visit);
 
 places_to_visit = city_country('Rome', 'Italy')
 console.log('2:-', places_to_visit);
 
 places_to_visit = city_country('Barcelona', 'Spain')
 console.log('3:- ', places_to_visit)

//  cd 38-city-names && node app.js