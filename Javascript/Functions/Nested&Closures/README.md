## Closure in JS:

### In a Nutshell:

- Closure is created when we access any data from outer function
- Javascript stores function's lexical environment
- If we don't access any variable from outside functions then closure will not be created
- Number of Closures created at any point will be equal to the nesting level of that function
- Let's say inner1 is nested inside outer which is nested inside main function, means nesting level is 2
- So 2 closure will be created(If function accessed outer fun variables)
- Each function has it's own lexical environment and execution context
