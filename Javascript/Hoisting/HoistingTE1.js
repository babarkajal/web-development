/**
 * Variable and functions declaration gets hoisted at top: Means it can be accessible before declaration
 */

console.log("BEFORE DECLARATION ", a); //undefined
var a = 10; //definition

console.log("AFTER DECLARATION ", a); // 10

SayHello(); //No error

function SayHello() {
  console.log("Hello Dear");
}
