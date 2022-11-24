var x = 10;
function foo(a) {
  var b = 20;

  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Closure
/* 
  The function below executes the function bar which was returned 
  when we executed the function foo in the line above. The function bar 
  invokes boop, at which point bar gets suspended and boop gets push 
  onto the top of the call stack
*/
console.log(moar(15));
