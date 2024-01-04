/*
1.Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.
*/
var a = 10;
var b = 20;
const result = addNumbers(a, b);
function addNumbers(x, y) {
  return x + y;
}
console.log(result);
