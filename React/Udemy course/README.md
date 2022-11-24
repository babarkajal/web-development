# ReactJS
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
#### Installation of ReactJS 
1. install node-js  
2. install create react app : **npm install -g create-react-app** 
3. use command **npx create-react-app myproject** to create react project 
4. **npm start** is used to run the project

#### Project Structure 
After creating the project, we can see one myporject folder. Inside that there are many folders and files.  
1. Public: It contains static files like images, videos etc 
2. src: whatever developer wants to create it should be placed inside this folder 
3. node_modules: all project dependencies and libraries 
4. package.json: contains all project dependencies entries

#### main libraries used 
In react we have to use two libraries to make the project
1. React: used to work with and call components 
2. ReactDOM: it knows how to take on what we want to show and turn it into html.

#### JSX 
JSX stands for JavaScript XML.<br/>
JSX allows us to write HTML in React.<br/>
JSX makes it easier to write and add HTML in React.<br/>
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.<br/>
The Babel package is used to convert the JSX into real javascript function. Refer the following example(https://babeljs.io/)<br/>
1. With JSX
```
function features() {
        return (
                <div>
                    This is div
                </div>
        )

} 
```
2. Without jsx 
```
"use strict";

function features() {
  return /*#__PURE__*/React.createElement("div", null, "This is div");
}
```
It's not nessesary that we have to use the JSX but it makes code easier to write and read.<br/>
The difference between JSX and HTML is: 
1. **The syntax for inline style is different.**: <br/>
Style for HTML `<div style="background-color: lightblue; "></div>`<br/>
Style for JSX: `<div style={{backgroundColor: lightblue}}></div>`<br/>
Here first curly brace indicates we are using javascript Variable from JSX and second curly brace is used to indicate javascript Object. 
2. **Syntax for class attribute is different**: Instead of class attribute className is used. 
3. **JSX can refer JS Variable**: {} is used

#### Component 
Component is major part of the ReactJS. UI part is divided into simple components and integrated into parent component to make complete UI</br> 
There are two types of the Component:
1. Functional components
2. Class components

All components must act like pure functions with respect to their props.

#### Lifecycle of the components
There are four stages of the component
1. Initilization
2. Mounting
3. Updating
4. Unmounting

#### State and Props 
State is a object used in class component and handled by event handlers.<br/>
Props are used in functional components and handled by functional component.<br/>
Props are imutable but state is mutable. We can change it throughout the life cycle of the component.
