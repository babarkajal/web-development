/*
**In nested function, inner function can assess its parents attributes/variables but outer cannot
*/

function Outer() {
    let outerVariable = 20;
    function Inner() {
        let innerVariable = 30;
        console.log(innerVariable,outerVariable) // 30 20

        //change parent variable
        outerVariable = "Kajal"
        console.log("Variable after change",outerVariable)
    }
    console.log("Inside outer", outerVariable)      //20
    Inner();
    console.log("Inside outer", outerVariable)      //kajal 
}

Outer();




