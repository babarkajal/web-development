// Assignment operator is used to assign value from RHS to LHS
// Assignment operator has lowest priority i.e. 2 in operator precedence table

//here 10 is assigned to a variable using = operator
let a = 10;

// According to precedence + has higher priority than = so 30 value get assigned
let b = 20 + 10;

//Chaining assignment
a = b = c = 100;
console.log(a);
