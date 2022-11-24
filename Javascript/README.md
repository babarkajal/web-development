# Javascript


### Introduction

1. JavaScript is scripting programming language used to give interactivity to static webpages.<br/>
2. HTML defines structure, CSS gives looks to that structure and javascript interactivity.
3. For example: Car which is structure created using some metals, plastic etc (HTML) , Colors design defines its looks and machine working, fuel its motion.
4. A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API

How webpage is get loaded inside browser?

1. First browser loads the html page
2. create it's DOM and store it in computer memory
3. Parse CSS and apply to every node
4. Display
5. Load javascript<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg">See How css rendered</a>
   

##### Script loading strategies

When we use inline javascript then it might happen that script gets loaded before HTML parsing. It can create problems. So for this we can use browsers event like <b>DOMContentLoaded</b><br/>
For external scripts <b>defer</b> option is used with script tab which stops execution of code till html get parsed.
async and defer both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.
scripts with an async attribute will execute as soon as the download is complete. This blocks the page and does not guarantee any specific execution order.
scripts with a defer attribute will load in the order they are in and will only execute once everything has finished loading.
<a href ="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/async-defer.jpg">Async and defer scripts</a>

## Variable

Variable is a container which store values.
let a;
when we print a it returns undefined means there is box a which contain nothing. when we address any undeclared variable like
console.log(house); --> house doesn't exit it throws <b color="red">ReferenceError: house is not declared;</b>

Note: Previous js version uses var. Difference between var and let is:

1. Using var we can use variables ahead of its declaration. This is called 'hoisting' Ex.
   log(fruits); //Prints Undefined
   var fruits = "apple"; //Declaration and init
   But Let doesn't allow this behavior.
2. Var declared variable can be used anywhere in the programming regardless of the scope. Let declared variables are limited to block scope only

<hr>

## Operators in Javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#operator_precedence">MDN Guide</a>

1. Arithmetic Operators: + , - ,/ , \* , %, \*\*, ++, --, - , +
   Assignment operator is right associative.
   a = x =20;
   here 20 is assigned to x first and then to a.
2. Comparison: ==, !=, === , !==, < , > , <= , =>
   Here === and == are two different operators in javascript because === means strictly equal and it checks datatype to
   for example 12 == '12' --> true  
   12 === "12" --> false
3. Bitwise Operators: & , |, ^, ~ , << , >>,>>>
4. Logical Operators: && , ||,!
5. Conditional Operators: ? :
6. Comma operator: ,
7. Unary operator: <br/> - delete: to delete any object property<br/> - typeof: return type of object <br/> - void: The void operator specifies an expression to be evaluated without returning a value.
   void expression;
8. Relational Operators: <br/>- in: returns true if the specified property is in the specified object <br/> - instanceOf:returns true if the specified object is of the specified object type.
<hr>


## Conditionals In javascript
1. if
2. if-else
3. switch

## Loops is JavaScript
1. for
2. forEach
3. while
4. do-while

<hr>
## Data types in javascript (Refer Datatypes.js script):

All primitives are immutable. A primitive can be replaced, but it can't be directly altered.
In javascript there are 7 primitive data types.

1. string
2. Number
3. bigint
4. boolean
5. symbol
6. null
7. undefined

## Primitive wrapper objects in JavaScript

Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values:
<b>String</b> for the string primitive.
<b>Number</b> for the number primitive.
<b>BigInt</b> for the bigint primitive.
<b>Boolean</b> for the boolean primitive.
<b>Symbol</b> for the symbol primitive.

The wrapper's valueOf() method returns the primitive value.

## 1. Number

Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25. The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
Number in javascript is same as double in java or C#. Its 64 bit

- Number constructor is used to create new Number. Ex. new Number(value)
- Static properties

  1. MAX_SAFE_INTEGER(9007199254740991)
  2. MAX_VALUE(1.7976931348623157e+308): largest positive integer
  3. MIN_SAFE_INTEGER (-9007199254740991)
  4. MIN_VALUE(5e-324) : Smallest positive integer
  5. NaN
  6. NEGATIVE_INFINITY
  7. POSITIVE_INFINITY

- Static method:
  1. Number.isNaN(): Determine whether the passed value is NaN.
  2. Number.isFinite(): Determine whether the passed value is a finite number.
  3. Number.isInteger(): Determine whether the passed value is an integer.
  4. Number.isSafeInteger(): Determine whether the passed value is a safe integer (number between -(2^53 -1) and 2^53 - 1).
  5. Number.parseFloat(string): This is the same as the global parseFloat() function. Number.parseInt(string, [radix]). This is the same as the global parseInt() function.

## 2. String

String is a combination of characters. We can create string by using quotes. String wrapper class is used to manipulate the strings using methods.

1. String(): Constructor is used to create string object using new
   let str = new String("Kajal")

2. Properties:
   length: returns length

3. Methods:

   1. at(index): returns characters present at index, Accepts negative integers, which count back from the last string character.
   2. charAt(index): returns characters present at index
   3. charCodeAt(index): Returns a number that is the UTF-16 code unit value at the given index.
   4. codePointAt(pos): Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.
   5. concat(str, [str1, ...]): Combines the text of two (or more) strings and returns a new string.
   6. includes(searchString, pos):Determines whether the calling string contains searchString.
   7. endsWith(searchString, [,position]): Determines whether a string ends with the characters of the string searchString.
   8. indexOf(searchValue, [,fromIndex]):Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.
   9. lastIndexOf(searchValue, [,fromIndex]): Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.
   10. localeCompare(compareString [, locales [, options]]) Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.
   11. match(regexp): Used to match regular expression regexp against a string.
   12. matchAll(regexp): Returns an iterator of all regexp's matches.
   13. normalize([form]): Returns the Unicode Normalization Form of the calling string value.
   14. repeat(count): Returns a string consisting of the elements of the object repeated count times.
   15. replace(searchFor, replaceWith): Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.
   16. replaceAll(searchFor, replaceWith): Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.


   
## JavaScript and HTML
JavaScript is high level dynamic interpreted programminh language. 

##### ways to add JavaScript in HTML
1. We can use inline JavaScript using `<script>` elements. Programmer can write js code inside `<script>` element.
```
<script> 
    document.write('This is javascript code');
    console.log(10+20);
</script>
```
2. We can place javascript code inside another folder and src attribute is used to refer that file.<br/>
`<script src ="js-file-path"></script>`


## DOM
The DOM defines a standard for accessing documents.<br/>
When a web page is loaded, the browser creates a Document Object Model of the page.<br/>
The HTML DOM model is constructed as a tree of Objects:<br/>
<img src="https://www.w3schools.com/js/pic_htmltree.gif"/>

## HTML DOM methods and properties
HTML DOM methods are actions we can perform (on HTML Elements).<br/>
HTML DOM properties are values (of HTML Elements) that we can set or change.<br/>
The following example changes the content (the innerHTML) of the <p> element with id="demo":
```
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>
</body>
</html>
```

**We can select any HTML element using following methods:**
1. getElementById
2. getElementByClassName
3. getElementByTagName
4. querySelector
5. querySelectorAll

**For changing the HTML element:**
1. **element.innerHTML =  new-html-content;** --> Change the inner HTML of an element
2. **element.attribute = new value;** --> Change the attribute value of an HTML element
3. **element.style.property = new-style;** --> Change the style of an HTML element
4. **element.setAttribute(attribute, value);** --> Change the attribute value of an HTML element

**Adding and Deleting element:**
1. **document.createElement(element)** - Create an HTML element
2. **document.removeChild(element)** - Remove an HTML element
3. **document.appendChild(element)** - Add an HTML element
4. **document.replaceChild(new, old)**	- Replace an HTML element
5. **document.write(text)** -	Write into the HTML output stream

**HTML DOM events **
A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element. To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:
Refer following example:
```
<!DOCTYPE html>
<html>
<body>
<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
</body>
</html>
``` 

## setTimeOut() method
When we want to fire any event for want to change the HTML element after some specific time then we can use setTimeOut() method.<br/>
syntax is **setTimeOut(function, time_in_ms);**<br/>
To stop this event we can use **clearTimeout(element)** method<br/>

## setInterval() method  
setInterval method is used to execute any event repeatedly. <br/>
syntax is **setInterval(function, time_is_ms);**<br/>
To stop this using **clearInterval(element);**<br/>

## LocalStorage
localStorage allows us to store data in key/value pair in a web browser. <br/>
**setItem(key,value)** function is used to store the value. ex: localStorage.setItem('name', 'kajal');<br/>
**getItem(key)** returns the value. ex: localStorage.getItem('name') returns string 'kajal'<br/>

<hr/>

