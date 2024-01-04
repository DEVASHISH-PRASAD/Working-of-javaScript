/*
5. Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.
*/
{
  console.log("Before letVar assignment:", letVar); //generates error
  let letVar = "I am declared using let";

  console.log("After letVar assignment:", letVar);
}
