"use strict";
/* ------------------------------ UNKNOWN TYPE ------------------------------ */
let unknownVar;
let userName;
unknownVar = 5;
unknownVar = "kajal";
// userName = unknownVar;  // cannot assign unknown to userName because its not a string always
if (typeof unknownVar === "string") { //here only string check is workable not other if we replace string with number it shows error
    userName = unknownVar;
    console.log(userName);
}
/* ------------------------------- NEVER TYPE ------------------------------- */
function generateError() {
    throw "Hello, this is error";
}
console.log(generateError()); //returns never
//# sourceMappingURL=app.js.map