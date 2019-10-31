//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? 
//Store the following into variables: job title, geographic location, annual salary,
// company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. 
//Store their birth year in a variable. Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? 
//Wonder no more! Store your current age into a variable. Store a maximum age into a variable.
// Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


document.getElementById("tft").innerHTML = "The Fortune Teller";
var x = "derector";
var y = "sweden";
var n = 80000;
var z = "Microsoft";
var fortune = x+y+n+z;
document.getElementById("info").innerHTML = fortune;


document.getElementById("greet").innerHTML = "The Age Calculator";
var x = 2019;
var y = 1996;
var sum = x - y;
document.getElementById("result").innerHTML = sum;


document.getElementById("tlsc").innerHTML = "The Lifetime Supply Calculator";
var x = 23;
var y = 100;
var g = 2;
var snacks = (y-x)*g
document.getElementById("snacks").innerHTML = snacks;


document.getElementById("tg").innerHTML = "The Geometrizer";
var rad = 40;
var cer = 2*3.14;
var circum = rad*cer
document.getElementById("circumference").innerHTML = circum;


document.getElementById("ttc").innerHTML = "The Temperature Converter C->F"
var cel = 35;
var far = cel * 9/5 + 32;
//var farenh = cel*
document.getElementById("fahrenheight").innerHTML = far;


