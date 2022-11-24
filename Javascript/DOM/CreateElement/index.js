/**
 ** Create new element and append it to the body
 */

//create new element using createElement Function
const newDiv = document.createElement("p");
//create text node
const textNode = document.createTextNode("This is new element added using API");
newDiv.append(textNode);

//appendChild returns newly added element
document.body.appendChild(newDiv);

/**
 ** innerHTML(): used to replace or get the content of the HTML element.
 ** We can set new element using innerHTML too
 * ! innerHTML is not recommended because it may lead to malfunctioning.
 * ! Intruder can set script tag to set alert which can still data from our website
 * ? instead of this use SetHTML and Node.createTextNode to add HTML and plain text respectively
 */
newDiv.innerHTML = "This text is added using innerHTML";
newDiv.innerHTML = "<p>This element is added using innerHTML</p>";

/**
 ** Styling Element:
 * Node.style = "background:yellow; color: blue;" will replace previous inline style
 * Node.style.color = 'blue'
 */

newDiv.style = "background:yellow; color: blue;";
newDiv.style.backgroundColor = "red";

//Set new Attribute to the div
newDiv.setAttribute("class", "newClass");
newDiv.setAttribute("id", "newId");

//get attribute value
console.log('newDiv.getAttribute("class")', newDiv.getAttribute("class")); //newClass

//check the node has that attribute or not
console.log("newDiv.hasAttribute", newDiv.hasAttribute("class")); //true

//remove attributes
newDiv.removeAttribute("id"); //true

//remove added element
const removableChild = document.createElement("div");
removableChild.innerHTML = "HELLO this removable div";
document.body.appendChild(removableChild);
document.body.removeChild(removableChild);

/**
 ** replaceChild(new, old)
 ** Replace child node by the given node
 * We must call this method on parent node
 */
const oldChild = document.createElement("div");
oldChild.innerHTML = "<h2>Replace me</h2>";
document.getElementById("div1").appendChild(oldChild);

const newChild = document.createElement("div");
newChild.innerHTML = "<h2>I am replaced</h2>";

oldChild.parentNode.replaceChild(newChild, oldChild);

/**
 ** insertBefore(newNode, referenceNode)
 * If node is already present then it moves it to the new position
 * This method is callable from the parent node
 */
document.body.insertBefore(newDiv, document.getElementById("div1"));

/**
 * hasChildNodes:The hasChildNodes() method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.
 */
console.log("document.body.hasChildNodes()", document.body.hasChildNodes());

/**
 ** insertAdjacentElement(position, element): inserts a given element node at a given position relative to the element it is invoked upon.
 * @params position its takes values
 *      'beforebegin': Before the targetElement itself.
 *      'afterbegin': Just inside the targetElement, before its first child.
 *      'beforeend': Just inside the targetElement, after its last child.
 *      'afterend': After the targetElement itself.
 */
const ele = document.getElementById("insertAdj");
const insertAdj = document.createElement("div");
insertAdj.innerHTML = "Hello, I am inserted after beginning of div";
insertAdj.style.backgroundColor = "lightblue";
const insertAdjAfterEnd = document.createElement("div");
insertAdjAfterEnd.innerHTML = "Hello, I am inserted after end of div";
insertAdjAfterEnd.style.backgroundColor = "lightblue";

ele.insertAdjacentElement("afterbegin", insertAdj);
ele.insertAdjacentElement("afterend", insertAdjAfterEnd);

/**
 ** Element.append():inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.
 */
insertAdjAfterEnd.append("This is appended string");

/**
 * Element.prepend(): insert before the first child of the element
 */
insertAdjAfterEnd.prepend("Prepended string");

//After adds node after the invoked element
insertAdjAfterEnd.after("After string the invoked object");
