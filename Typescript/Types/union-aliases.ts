//BUT THIS COMBINE WONT WORK WITH OTHER DATATYPES
// TO MAKE IT WORKABLE WITH MULTIPLE TYPES ADD MULTIPLE TYPES USING SEPARATOR | -> UNION TYPES

//TYPE ALIASES-> whenever there is long types we can alias it with simple name
type conversionType = "as-text" | "as-number"; 

//UNION TYPES and LITERAL TYPES
function combine(
  input1: number | string | boolean,
  input2: number | string | boolean,
  resultConversion: conversionType
) {
  // const result = input1 + input2;			// for this line there is error that + cannot be applied on string and number
  //so add checks
  let result;
  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else result = input1.toString() + input2.toString();
  return result;
}

const combinedAges = combine(30, 26, "as-number");
const combinedString = combine("kajal", "babar", "as-text");

console.log(combinedAges);
