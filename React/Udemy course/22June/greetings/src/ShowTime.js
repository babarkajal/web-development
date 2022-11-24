import React from "react";
import "./Style.css"

class ShowTime extends React.Component {
	//create constructor to initialize the state
	constructor(props) {
		super(props);
		this.state = {time: new Date()}
	}

	//this method will be called right after rendering component
	componentDidMount() {
		setInterval(()=> {
			this.setState({time: new Date()})
		}, 1000);
	}

	//render the components
	render() {
		return (
			<div>
				{/* print the time in seperate form*/}
				<div className= "Time">
					{this.state.time.toLocaleTimeString('en-US',{hours12: true})} 
					<br/>
					{this.state.time.toLocaleString('en-US', {weekday:"long" })}
					<br/>
					{this.state.time.toLocaleDateString()}
				</div>
			</div>
		)
	}
}

export default ShowTime;