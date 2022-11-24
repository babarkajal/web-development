/*
 create class component and bind it to the object
 */
 import React from  "react";
 import './ButtonStyle.css'

 class App extends React.Component {
	 state = {name: "Hey,Click me", name2: "I am button, click me", name3: "Hey, there!", name4: "Press me"};

	 //to bind the regular function create constructor 
	 constructor(props) {
		 super(props);
		 this.changeContent = this.changeContent.bind(this);		//this will bind the function to the class
		 /* suppose I remove this line then we get error*/
	 }

	 //binded using constructor
	 changeContent(event) {
		this.setState({
			name: "I am Button. Click me"
		})
	 }
 
	 //arrow function: there is no need to bind this because it is class property. 
	 changeValue= () => { 
		 this.setState({
			name2: "Hello"
		 });
	 }
	 
	 //This function is binded in the render function itself
	 handleEvent(a) {
		 console.log("mouse leave event and got  "+a);
		 this.setState({
			 name3: "hello, there!"
		 })
	 }
	 //regular function
	 makeArrowFunction(ev,a) {
		 console.log("arrow function created ",a);
		 this.setState({
			name4: "Click here!"
		});
		console.log(ev);
	 }
	 //render function
	 render() {
		 return(
			 <div>

				 {/* bind using constructor */}
				 <button onClick={this.changeContent} style={{backgroundColor: "lightblue"}}> {this.state.name}</button>
				 <br/>

				 {/* bind using arrow function */}
				 <button onClick={this.changeValue} style={{backgroundColor: "lightgreen"}}> {this.state.name2}</button>	
				 <br/>

				 {/* bind in the render */}
				 <button onMouseLeave={this.handleEvent.bind(this,"parameter")}> {this.state.name3} </button>	
				 <br/>

				 {/* bind using arrow in render and passing function*/}
				 <button onClick={(ev)=> this.makeArrowFunction(ev,100)}> {this.state.name4} </button>

			 </div>
		 );
	 }
 }
 
 export default App;