function Outer(a) {
  let b = {
    name: "ABC",
  };
  function Inner() {
    let innerC = "This is Inner variable";
    console.log("Variables from outer function", b, a);
  }
  console.log("INSIDE OUTER FUNCTION", a, b);
  return Inner;
}

let funRef = Outer(10);

funRef();
