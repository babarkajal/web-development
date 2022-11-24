//Logical operators are used to combine two or more statements using operator and produce boolean result
// AND
// OR
// NOT - unary operator

/* ------------------------------ AND OPERATOR ------------------------------ */
/* 
Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand. 
*/

//AND operator returns second value when both values are true
console.log(true && true); //true
console.log("Hello" && "Hi"); //Hi

// AND returns first value when first value encountered as wrong
console.log(NaN && "hello"); //NaN

// AND returns second value when second value encountered as wrong
console.log("0" && undefined); //undefined

/* ------------------------------- OR OPERATOR ------------------------------ */
// OR operators returns first value if first is value is correct as well as second value is correct
// second value is correct or both are wrong
console.log("Hello" || 0); //Hello
console.log(false || "Hii"); //Hii
console.log(false || 0); //0
console.log("Hii" || "Hello"); //Hii

/* ------------------------------ NOT Operator ------------------------------ */
// makes inverse of current value if its truthy then makes it falsy and vice versa
console.log(!"Hello"); //false
console.log(!0); //true
console.log(!!null); //false
