/*
 create class which contain the state and manipulate the state property 
 */
import React from 'react'
class Car extends React.Component {
	 //for initilization use contructor
	 constructor(props) {
		 super(props);
		 this.state  = {
			brand: "Ford",
			model: "Mustang",
			color: "red",
			year: 1964
		 }	 
	 }
	 //changeState function
	 changeState= () =>{
		 this.setState({
			 brand: 'Maruti',
			 model: "swift",
			 color: "black",
			 year: 2000 }
		 );
	 }
	 //write render function 
	 render(){
		 return (
			<div>
				<h1>Car Info</h1>
				<div>
					<ul>
						<li>Brand: {this.state.brand}</li>
						<li>Model: {this.state.model} </li>
						<li>Color: {this.state.color}</li>
						<li>COlor: {this.state.year}</li>
					</ul>
				</div>
				<button type="button" onClick={this.changeState}> click me to change the content</button>
			</div>
		 );
	 }

	 
 }

 export default Car;