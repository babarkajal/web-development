console.log("Before Initialization x = ", x); //undefined
var x = 10;
console.log("After Initialization x = ", x); // 10

/**
 ** let and const are not hoisted because they have block scope
 * ! ReferenceError: Cannot access 'y' before initialization
 */
// console.log(y);
let y = 20;
