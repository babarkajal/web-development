/* ------------------------- FUNCTION AS A CALL BACK ------------------------ */
function printEven(num) {
  console.log(num + " is Even number");
}
function printOdd(num) {
  console.log(num + " is Odd number");
}

function DecideNumber(num, printEven, printOdd) {
  if (num % 2 === 0) printEven(num);
  else printOdd(num);
}

DecideNumber(10, printEven, printOdd);
DecideNumber(3, printEven, printOdd);
