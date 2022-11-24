/* const button = document.querySelector("button");
const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
function add(num1: number, num2:number) {
	return num1+ num2
}

button?.addEventListener("click", function(){
	console.log(add(+num1.value, +num2.value))
}) */



/* -------------------------------------------------------------------------- */
/*                             TYPES IN TYPESCRIPT                            */
/* -------------------------------------------------------------------------- */
function add( n1, n2) {
	return n1+n2;
}

const number1 = '5';			//FOR THESE JAVASCRIPT RETURN 52.8 WHICH IS NOT EXPECTED OUTPUT
const number2 =2.8;
console.log(add(number1, number2));


//TYPESCRIPT ALLOWS US TO DEFINE TYPE OR PARAMETERS

function add2( n1:number, n2 :number) {
	return n1+n2;
}

const number3 = 5;		//IF WE PROVIDE NON-NUMERIC THEN IT THROWS ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
const number4 =2.8;
console.log(add2(number3, number4));

/* -------------------------------------------------------------------------- */
/*                               TYPE INFERENCE                               */
/* -------------------------------------------------------------------------- */
// let k:number=true;
let k = 20;
const b ="kajal";