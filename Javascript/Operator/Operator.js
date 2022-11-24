console.log("Arithmetic operators");
let a = 10;
let b = 20;
console.log(a + b); ///10
console.log(a - b); ///10
console.log(a / b); ///10
console.log(a * b); ///10
console.log(a % b); ///10
console.log(a ** b); ///10

//String concatenation
console.log("\nPlus operator: Used with string");
console.log(1 + 2 + "3"); // 3 + '3' = 33
console.log("1" + 2 + 2); //122

//Unary operator
console.log("Unary operator +,- ");
console.log(-10);
console.log(+-10);
console.log(-(-10));

//Unary operator is also used to convert non-number to number
console.log("Unary operator is also used to convert non-number to number");
console.log(-"10"); //-10
console.log(+"10"); //+10

//usage of unary on non-numbers
console.log("Unary operators with non-numbers");
console.log(-true); //-1
console.log(+false); //0
console.log(+""); //NaN
console.log(+"123Hello"); //Nan
