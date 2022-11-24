/**
 ** In most cases, the value of this is determined by how a function is called (runtime binding).
 ** It can't be set by assignment during execution, and it may be different each time the function is called.
 ** this contains property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.
 */

//IN GLOBAL CONTEXT: THIS WILL ALWAYS REFER TO WINDOW OR GLOBAL OBJECT
console.log("WINDOW === this", this === window);

//WE CAN ALSO ACCESS GLOBAL VARIABLES USING this
var number = 10;
console.log("Window.number", this.number, window.number);
