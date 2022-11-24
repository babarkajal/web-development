/*
 create class component which return jsx for one button and add onClick event which print some text on console
 */
import React from  "react";

class App extends React.Component {
	val = "data" ;
	changeContent(event) {
		//console.log(event); 						/* here event is the instance of syntheticEvent*/
		console.log("Hey, button is clicked");		//when we click button it prints the msg
		console.log(this);							//in this case we can see this is undefined because this function is not binded to the class
		//console.log(this.var);						//when we try to access any property of class, error is thrown

	}

	focusButton() {
		console.log("Button is focused");			//this will printed when button is focused 
		
	}

	render() {
		return(
			<div>
				<button onClick={this.changeContent} onFocus = {this.focusButton}> Hey, Click me</button>
			</div>
		);
	}
}

export default App;