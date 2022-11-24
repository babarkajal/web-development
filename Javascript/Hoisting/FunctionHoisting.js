/**
 * javascript allocates memory to all variable/functions before execution
 * There are two steps inside execution of any function
 *      1. Creation phase
 *      2. Execution phase
 * So we can access any variable or function before its declaration this is called Hoisting in javascript
 *
 */

Greet(); //NO_ERROR
// If we add debugger to this line, then we can see this functions body in Global Execution Context.

function Greet() {
  console.log("Good Evening Dear");
}

/**
 ** arrowFun is a variable and initially it get assigned to the undefined
 */
arrowFun(); //TypeError: arrowFun is not a function

//HOISTING IN ARROW FUNCTIONS
var arrowFun = () => {
  console.log("Hoisting in Arrow function");
};
