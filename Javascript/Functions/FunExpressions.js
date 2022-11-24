//WE CAN CREATE FUNCTIONS EXPRESSIONS IN JAVASCRIPT THAT'S WHY FUNCTIONS ARE CALLED AS FIRST-CLASS FUNCTIONS
const showGreet = function () {
  return "Hello dear, Have a great life ahead!";
};

//functions are one kind of value that can be assigned and printed
console.log(showGreet);

//when we add parenthesis after showGreet then it will run the function
console.log(showGreet());

/* ------------------------------------ / ----------------------------------- */

//WE CAN ASSIGN ANY DECLARED FUNCTION TO ANOTHER VARIABLE
function fun() {
  console.log("Have a fun!!!");
}

const fun2 = fun;
fun();
fun2();

/* ------------------------------------ / ----------------------------------- */

const hii = function sayHi() {
  return "Hii Kajal";
};

console.log(hii.name);

//It assign sayHii function to hii, but sayHi name get ignored only anonymous function get assigned to hii. sayHii is considered as in-scope functions which accessible only within the function body 
console.log(hii());
// console.log(sayHi());		sayHi is not defined

/* ---------------------------- function hoisting --------------------------- */
console.log(noHoisting); //Undefined

//Even though the variable name is hoisted but the definition is not hoisted to we cannot call it. Below line will produce an error
// noHoisting();

var noHoisting = function () {
  return "No hoisting of function expression allowed";
};
