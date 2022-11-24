//Nullish coalescing operator is used to provide definite value when any other value is null or undefined
//Like we want so show user name and when there is no any username then show anonymous
console.log("Nullish coalescing Operator");
let user = null;
console.log(user || "Anonymous user");

// console.log(true && user ?? "Anonymous")		//error Uncaught SyntaxError: missing ) after argument list

console.log((true && user) ?? "User"); //User
// console.log(true || user ?? "Anonymous")	Error
