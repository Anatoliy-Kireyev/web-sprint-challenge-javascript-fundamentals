///Answers from README
/*
Briefly compare and contrast .forEach & .map (2-3 sentences max)
   forEach doesn't return anything it only calls each given item, while map return an array with that items
Explain the difference between a callback and a higher order function.
   higher order function accepts callback function as an argument
What is closure?
   clousre allow to stop data leakage for inside the function, nested functions have access to data outside them, while their data can not be accessed from outside
Describe the four rules of the 'this' keyword.
1 when this is in global scop it's value will be window obj
2 obj.this obj before the dot is this
3 when this is used in constructor function, it refers to specific instances attached to this
4when call or apply is used this is explicitly defined
Why do we need super() in an extended class?

*/
// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//"Because fuctions have access to outside information, while at the same time you can not access inside information from outside the function"

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(4))