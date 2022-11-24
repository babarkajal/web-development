function Main() {
  let mainVar = 20;
  //HAS REFERENCE TO Main CLOSURE
  function Inner1() {
    let inner1Var = "inner1Var";
    //HAS REFERENCE TO Inner1 CLOSURE and indirectly Main Closure
    function Inner1_1() {
      let inner2Var = "inner2Var";
      console.log("This is inner function ", mainVar, inner1Var, inner2Var);
      Inner2();
    }
    return Inner1_1;
  }

  function Inner2() {
    console.log("This is variable");
  }
  return Inner1;
}

const fun1 = Main();
const fun2 = fun1();
fun2();
