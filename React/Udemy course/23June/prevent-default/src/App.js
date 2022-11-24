
import React from 'react';
import "./style.css"

class App extends React.Component {
	state ={color: 'white',backgroundColor: 'darkblue'}
	changeColor(event) {
		this.setState({
			color: 'red',
			backgroundColor: 'lightblue'
		});
	}

	handleEvent(event) {
		event.preventDefault(); // this prevent the action on checkbox
		document.getElementById('msg').innerHTML = "preventDefault won't let you check this";
	}

	render(){
		return (
		<div>
			Checkbox: <input type="checkbox" onClick={this.handleEvent.bind(this)}/>
			<br/>
			Button: <button onClick={(e)=>this.changeColor(e)} style={this.state}>Click me to change the color </button>
			<br/>
			<div id='msg'></div>
		</div>
		)}
}

export default App;
