/**
 **Temporal Dead zone
 * let and cost are in TZT between stating of code execution and until there declaration
 * any attempt to access them in TZT will lead to ReferenceError
 */

function fun() {
  console.log(a);
  let a = 10;
}
fun();
