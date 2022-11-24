import React from 'react';
class App extends React.Component {
	constructor(props) {
		super(props);			//compulsory line otherwise error is thrown
		this.state = { hello: 'world!' };
	}

	componentWillMount(){
		console.log("before rendering the element");
		alert("before any action componentWillMount is called");
	}

	componentDidMount() {
		console.log("after rendering the element");
	}

	changeState() {
		this.setState({hello: "india"});
	}

	//render method
	render(){
		return (
			<div>
				<h1 onClick = {this.changeState.bind(this)}> {this.state.hello} click me to see the effect</h1>

			</div>
		)
	}

	//we can see this output in the console. 
	componentWillUpdate()
    {
        console.log("before updating the component");
    }
 
    componentDidUpdate()
    {
        console.log("after updating");
    }



}

export default App;