/**
 ** INSIDE FUNCTION CONTEXT
 */
function demo1() {
  console.log("In non strict mode", this);
}

//This function will print 'this' as a window object in browsers and global object in node because it it called on window
demo1();

//In strict mode this is not bind to global object because StrictDemo is not a method or property on an object
function StrictDemo() {
  "use strict";
  console.log("In strict mode", this);
}

StrictDemo();
