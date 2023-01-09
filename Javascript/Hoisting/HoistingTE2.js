/**
 * Declaring same variable with same name in blocks
 */

var globalA = 10;
console.log(globalA); //10

if (globalA === 10) {
  //true
  var globalA = 100; //get's hoisted at top
  console.log(window.globalA); //global
}

if (globalA !== 100) {
  var globalA = 200; //will not be executed
  console.log(globalA);
}

console.log(globalA); //100

/**
 * Access variable outside block
 */
