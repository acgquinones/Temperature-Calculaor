//Ara Carmel Quinones

//degree symbol
const degreeC = '\u00B0' + 'C';
const degreeF = '\u00B0' + 'F';
// Store a celsius temperature into a variable.
let celsius = 35;
//store a fahrenheit into a variable
let fahrenheit = 40;

// Convert celsius to fahrenheit
//to fahrenheit: multiply by 9, then divide by 5, then add 32
let celToFah =  Math.round((celsius * 9 / 5) + 32);
document.getElementById('c2f').innerHTML = celsius + degreeC + " is " + celToFah + degreeF;

// convert fahrenheit to celsius
// to celsius: deduct 32, then multiply by 5, then divide by 9.
let fahToCel =  Math.round((fahrenheit - 32) * 5 / 9);
document.getElementById('f2c').innerHTML = fahrenheit + degreeF + " is " + fahToCel + degreeC;

// random Fah int
fahrenheit = Math.round(Math.random() * 100);
let randFtoC =  Math.round((fahrenheit - 32) * 5 / 9);
document.getElementById('randF2C').innerHTML = "It is " + fahrenheit + degreeF + " today. That's " + randFtoC + degreeC;
