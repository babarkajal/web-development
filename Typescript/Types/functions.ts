/* -------------------------- FUNCTION RETURN TYPE -------------------------- */
//HERE RETURN TYPE OF THE FUNCTION IS NUMBER
function add(input1: number, input2: number): number {
  return input1 + input2;
}

//WHEN WE DEFINE RETURN TYPE AS undefined it shows error because undefined is kind of type
function addUndefined(input1: number, input2: number): undefined {
  return undefined; //error solved
}

//MISMATCH RETURN TYPE
function addNumber(input1: number, input2: number): string {
  if (input1 === 10) return input1.toString() + input2.toString()
   /*  return (
      input1 + input2
    ); */ //type error-> type string is not assignable to type string
  else return "Kajal";
}


/* ---------------------------- VOID RETURN TYPE ---------------------------- */
function voidFun():void {
	return;			//return nothings
}

function voidFunWithReturnType():void {
	// return 10;			//return integer
}

/* ------------------------------ FUNCTION TYPE ----------------------------- */
let addFun: Function;
addFun = add;			//store the reference to the function

// addFun = 5;	//creates a problem. runtime error: addFun is not a function. to avoid this we can declare addFun as function type

console.log(addFun(10,20))			//30

/* ------------------------- SPECIFIC FUNCTION TYPES ------------------------ */
function print(value) {
	console.log("Value is : ", value)
}
addFun = print;
console.log(addFun(10,10))				//undefined because it calls the print function and returns nothing

//funRef is reference which points to the function which has two parameters and number return type
let funRef: (a:number,b: number)=> number;

funRef = add;
// funRef= print;				//error

