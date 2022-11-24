//LETS DEFINE A GLOBAL AND LOCAL VARIABLE
var a = "Global a";

const localObj = {
  a: "Local obj a",
};

function whoseThis(b) {
  console.log("Referring to ", this, this.a, b);
}

whoseThis(); //will point to global because function's this is depends on which obj it get's called
whoseThis.call(localObj, 10); //now whose this is get called on localObj
whoseThis.apply(localObj, [30]); //now whose this is get called on localObj
