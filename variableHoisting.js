/*
4. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.
*/
{
  console.log("Before letVar declaration:", letVar); //generates error
  let letVar = "I am declared using let";

  console.log("Before varVar declaration:", varVar); //generates error
  var varVar = "I am declared using var";

  console.log("Before constVar declaration:", constVar); //generates error
  const constVar = "I am declared using const";

  console.log("After letVar declaration:", letVar);
  console.log("After varVar declaration:", varVar);
  console.log("After constVar declaration:", constVar);
}
