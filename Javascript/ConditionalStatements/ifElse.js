// Write, Edit and Run your Javascript code using JS Online Compiler

//If else statement in javascript
// Truthy values are:  true, non-zero numeric, object, non-empty string, array, Infinity,
if ("null") {
  console.log("This statement evaluate to truth");
}

//Assignment statements are always true because they return assigned value
//But for falsy value conditions evaluates to false
let x;
if ((x = 0)) {
  console.log("If statement evaluate to truth", x);
} else console.log("Statement is false", x);

//Boolean objects: Always evaluates to true because type of a is Object
const a = new Boolean(false);
if (a) {
  console.log("Got boolean object");
}
