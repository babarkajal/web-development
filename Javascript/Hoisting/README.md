## Hoisting in JS:

### In a Nutshell:

- variables and functions are hoisted to the top means they can be accessed before their declaration
- This is possible because Javascript runs the code in two phases
    1. Creation phase
    2. Execution phase
- In creation phase all variables and functions get memory
- Variables assigned to undefined and functions to their body
- So if we access any variable we will get undefined
- Hoisting it not applicable to let, const and arrow functions.
- let and const have block scope and arrow functions are considered as variables
