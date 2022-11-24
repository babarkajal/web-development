//CLASS EXPRESSION
//A class expression is another way to define a class. Class expressions can be named or unnamed.


let circle = class {
        radius = 2.5; 
        constructor(){
                this.radius = 20;
        }
}

console.log("Name of the class is",circle.name)

let c1 = new circle()
console.log(c1);