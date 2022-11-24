/** 
    ** Arguments are array like objects accessible only within non-arrow functions. Arguments are of type object so doesn't have array methods like map 
    ** Value can be accessed using index starting from 0
    ** We can make use of this when we don't know the actual arguments numbers
*/

function fun(a,b,c) {
    console.log(arguments[0])   //4
    console.log(arguments[1])   //5
    console.log(arguments[2])   //6
    console.log(arguments[3])   //undefined
}

fun(4,5,6)


console.log("-----------------------------------------------------");

//CONTACT MULTIPLE STRINGS USING ONE FUNCTION
function myConcat(separator) {
    console.log(arguments);
    const arr = Array.prototype.slice.call(arguments,1);    //because 0th index is separator
    console.log("TYPE Of argument, ",typeof arguments)
    console.log(arr.join(separator))
}

myConcat(',','Apple','Pear','pineapple');
