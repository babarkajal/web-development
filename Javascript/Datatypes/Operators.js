//In operator

//For array it checks for index only not value
var array = ["a", "b", "c"];
console.log(0 in array); //true
console.log(2 in array); //true
console.log(4 in array); //false
console.log("a" in array); //false

"length" in array; //true
//For build in object
console.log("PI" in Math); //true
console.log("MAX_SAFE_INTEGER" in Number); //true

//For custom objects
let car = { name: "maruti", avg: "20km", color: "white" };
console.log("name" in car); //true
console.log("avg" in car); //true
console.log("height" in car); //false

//instanceOf
console.log(array instanceof Array); //true
console.log(car instanceof Object); //true
