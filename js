//creating variable for kelvin
const kelvin = 293;
//console.log(kelvin);
//create variable to calculate celsius based on kelvin
const celsius = (kelvin - 273);
//console.log(celsius);
//create a variable to calculate fahrenheit
const fahrenheit = celsius * (9/5) + 32;
//console.log(fahrenheit);
//setting fahrenheit to a whole number
Math.floor(fahrenheit);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')
