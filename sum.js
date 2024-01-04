/*
3. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.
*/
function sum(x, y) {
  console.log("Before assignment:", myVar);
  var myVar = x + y;

  console.log("After assignment:", myVar);

  return x + y;
}

var a = 2;
var b = 32;
sum(a, b);
