## DOM (Document Object Model)

### What is DOM ?

- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
- The DOM is built using multiple APIs that work together.
- Javascript uses the DOM to access the document and its elements
- Every object located within a document is a node of some kind.
- Whenever any HTML document is loaded inside the browser, the browser creates a DOM tree from that document. For example:

### DOM APIs

1. document.querySelector

- querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
  If we want to fetch first div element from the document then we can write like this
        
        
        document.querySelector("div")
        

- The parameter of this function is selector. We can provide any selector to select the element, like ID selector, Class selector etc.

2. QuerySelectorAll
- selects all the matching node and return array of them
        
        document.querySelectorAll("p")
        
- We can mention mode than more selector separated by comma (,)
      
      document.querySelectorAll("div, p")
      
- Will select all div and p elements present in the DOM

3. createElement
- Create new HTML element using provided tagName as a parameter
- appendChild method is used to add this node to body node
        
        const newDiv = document.createElement("p");
        

4. appendChild
- adds a node to the end of the list of children of a specified parent node
- If we want to add that node to the body then use document.body as parent node
        
        document.body.appendChild(newDiv);
        
- We can see new p tag added to the body in the
- It returns newly added element

5. innerHtml
- It sets or gets the content inside the element
- Now set some text inside newly created element
        
        newDiv.innerHTMLl = "This is new element added using API"
        

- We can insert HTML using this property
        
        newDiv.innerHTML = "<p>This element is added using innerHTML</p>"
        

6. Styling element
- To style the element, string can be assigned to the element.style property but it will replace the inline style ands will add new one
        
        newDiv.style = "background:yellow; color: blue;";
        

- To focus on specific property, element.style.propertyName can be handy Set background color of newDiv to red
        
        newDiv.style.backgroundColor = "red";
        

7. setAttribute
- adds new attribute to the element with value
- Let’s say we want to add class to the newly created element
        
        newDiv.setAttribute("class", "newClass");
        

8. removeChild
will remove the node added to the DOM

        document.body.removeChild(newDiv);

9. replaceChild
- this will replace old child node with new one
        
        parentDiv.replaceChild(newNode, oldNode);
        

10. hasChildNodes()
- The hasChildNodes() method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.
        
        document.body.hasChildNodes()
        

11. append()
- The Element.append() method inserts a set of Node objects or string objects after the last child of the Element.

                document.body.append(‘This is appended string’)
 
- We can add any many as we want


12. getElementById
- To select any element by ID attribute
- It returns single element which matches the id value
	
        document.getElementById('heading-text')

13. getElementsByClassName
- It selects all elements which have same class name
- Return type is array of element’s object
	
        document.getElementsByClassName('intro')

- To traverse the list, do as mentioned in querySelectorAll. Use for-of loop to access each element

14. getElementsByTagName
- Select using tag name and array of matched elements
	
         document.getElementsByTagName('div')
         
- to traverse the list, do as mentioned in querySelectorAll. Use for-of loop to access each element
