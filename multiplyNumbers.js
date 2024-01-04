/*
2. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.
*/
var a = 12;
var b = 15;

const multiplyNumbers = function (x, y) {
  return x * y;
};
const result = multiplyNumbers(a, b);
console.log(result);
