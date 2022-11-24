/** 
Before ES2012, the block level functions get defined though the condition is false, but in strict mode 
insideFun get defined only if condition is true
**/


//condition is true then insideFun1 defined
if(2===2) {
    function insideFun1() {
        console.log("Inside fun 1 function");
    }
}
insideFun1()

//condition is false, so insideFun2 is not defined so the calling line will throw an error
if(2===32) {
    function insideFun2() {
        console.log("Inside fun 2 function");
    }
}

console.log(insideFun2)			//undefined
insideFun2()				//insideFun2 is not a function