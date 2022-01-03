const kelvin = 0;
//create a variable named kelvin
const celsius = kelvin - 273;
//Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius * (9/5) + 32;
//this equation to calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit);
//built-in Math object to round down the Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);