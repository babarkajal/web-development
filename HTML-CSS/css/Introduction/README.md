### What is CSS? 
 CSS stands for Cascading style sheet. CSS allows you to create rules that specify how the content of an element should appear. 

### CSS syntax

CSS is a rule-based language — you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page.
			
		```
		<selector> {
			//css-rules
		}
		```

For example, you can decide to have the main heading on your page to be shown as large red text. The following code shows a very simple CSS rule that would achieve the styling described above:
```
h1 {
    color: red;
    font-size: 5em;
}
```

- In the above example, the CSS rule opens with a selector. This selects the HTML element that we are going to style. 
- In this case, we are styling level one headings (<h1>).
- We then have a set of curly braces { }.
- Inside the braces will be one or more declarations, which take the form of property and value pairs. We specify the property (color in the above example) before the colon, and we specify the value of the property after the colon (red in this example).
- This example contains two declarations, one for color and the other for font-size. Each pair specifies a property of the element(s) we are selecting (<h1> in this case), then a value that we'd like to give the property.
- CSS properties have different allowable values, depending on which property is being specified. In our example, we have the color property, which can take various color values. - We also have the font-size property. This property can take various size units as a value.
A CSS stylesheet will contain many such rules, written one after the other.


#### Adding CSS:
1. Internal CSS
	-  Internal css can be added in HTML using style tag
	- Style tag is added inside head tag
		```
		<style> 
			h1 {
				color: red;
				font-size: 5em;
			}
		</style>
		```

2. Inline CSS
add style attribute to html element which takes strings of css rules separated by ;
		```html<h1 style="color:blue;">A Blue Heading</h1>```

3. External CSS
	- Using link tag we can add external CSS file
	     ```<link rel="stylesheet" href="styles.css">```



Selectors:

- CSS selectors is a part of css rule that target html element which we want to style.
There are many ways to target HTML elements

1. Type selector
- The CSS type selector matches elements by node(HTML tag) name. In other words, it selects all elements of the given type within a document.
Syntax:
element { 
//css-rules
//css-rules
	…
}
- For example
p {
	font-size: 20px;
	color: green;
}

- Here p is type selector which targets all p elements from document and add these css rules to them

2. Class selector
- Class selector selects elements using its class attribute
- Syntax
.class_name { 
//css-rules
//css-rules
	…
  }



- For example, 
	.container {
		background: green;
		color: white;
  	  }	

3. ID selector:
- The CSS ID selector matches an element based on the value of the element's id attribute.
- Syntax
#id { 
//css-rules
//css-rules
	…
 }

- For example, 
	#user-name {
text-transform: underline;		
  	 }

4. Universal Selector:
Star(*) is a universal selector
It matches all the nodes of html

			 * {
				margin: 0;
   				padding:0;
  }	

5. Attribute selector: 
The CSS attribute selector matches elements based on the presence or value of a given attribute.
Syntax 
<selector>[attribute = value ] {
	//css-rule
	//css-rule
}
For example: 
input[type=”text”] {
	
}

6. Pseudo Classes
Pseudo class refers to the state of element like hover, focus, disabled
We can style particular elements states using psuedo classes
Syntax
<selector>:<state> {
//css-rules
}
For example:
button:hover {
	color: red;
} 
	 
