/**
 ** Static blocks are used for initialization of static variables
 * Class may have more than one static block
 */

class StaticDemo {
        static var1 = "This is var1";
        static var2;
        var3 = " this is non-static variable";
        static {
                console.log("First static block", this.var1, this.var2, this.var3);
        }

        static {
                console.log("Second static block")
        }

        //static method 
        static staticMethod() {
                console.log("This is static method", this.var1, this.var2, this.var3);
        }
}

console.log(StaticDemo.var1);
StaticDemo.staticMethod()
/** OUTPUT
 First static block This is var1 undefined undefined
 Second static block
 This is var1
 This is static method This is var1 undefined undefined undefined
 */