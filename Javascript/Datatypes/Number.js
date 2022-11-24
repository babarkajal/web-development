//Number wrapper class

let a = new Number(20); // 	20
let b = new Number("30"); //30
b = new Number("30k"); //NaN i.e not a number
console.log("Type of a", typeof a); //Object

b = new Number("50");
let c = a + b; //70

b = new Number(4 + 5); //9

//Comparison operators
a = 10;
b = new Number(10);
console.log(a == b); //true because it checks its value
console.log(a === b); //false because one is number and other is object
a instanceof Number; // is false
b instanceof Number; // is true

//Some static properties
console.log("Maximum safest number ", Number.MAX_SAFE_INTEGER); //9007199254740991 --> 2^53-1
console.log("maximum value ", Number.MAX_VALUE); //1.7976931348623157e+308 -->  2^1024
console.log("Minimum safe interger ", Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log("Minimum value ", Number.Min_VALUE); //5e-324

//Static methods
Number.isNaN(10); //false
Number.isNaN(NaN); //true

Number.isFinite(100); //true
Number.isFinite(Number.POSITIVE_INFINITY); //false

Number.isInteger(-10); //true;
Number.isInteger(-10.2); //false;

Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); //false;
Number.isSafeInteger(Number.MAX_SAFE_INTEGER); //true;

Number.parseFloat("10.2a"); //10.2
Number.parseFloat("a10.2"); //NaN

Number.parseInt(10); //10
Number.parseInt("10kajal"); //10
Number.parseInt("a10"); //NaN

Number("123"); // 123
Number("123") === 123; // true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity



//To store large number which are greater than 2^53-1 or -2^53-1 javascript uses bigint datatype
//To make any number as a bigint type append n to that number
let bigIntNum = 1234567890123456789012345678901234567890n
console.log(bigIntNum)
