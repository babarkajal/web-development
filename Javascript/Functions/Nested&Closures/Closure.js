/**
**Javascript preserves inner function's environment so that the outers variables can be accessible inside inner function 
*/

function outer() {
    let a = 3;
    function inner() {
        let b=10;
        return a+b;
    }
    return inner;
}

let funRef = outer();       //return reference of inner function
console.log(funRef())       //13

/*
 SEE HOW IT SAVES a VARIABLE AND USES INSIDE INNER FUNCTION
 When we call any function, that function get executed on stack and after completion it get returned
 Here Outer get called and returned ref to inner function
 Now when we execute inner function, we come to one line 
    return a+b;
 Here b is visible but where is a coming from? 
 So javascript binds function and it's environment together that concept is called **Closures**
*/


function pet(){
        function getName(){
                console.log("Name is ", name);
        }
        let name="Cat";
        return getName;
} 

const nameOfPet=pet();
nameOfPet()
