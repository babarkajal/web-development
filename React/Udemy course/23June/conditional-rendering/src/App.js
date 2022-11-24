import React from "react";

class App extends React.Component{
	//create constructor
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
    	this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state={isLoggedIn: false};
	}
	//to toggle the value of the isLoggedIn value we have used this two functions
	handleLoginClick(){
		this.setState({isLoggedIn: true})
	}

	//toggel value of isLoggedIn to false when user logout
	handleLogoutClick() {
		this.setState({isLoggedIn: false})
	}

	render() {
		//get the value of the isLoggedInt state property
		const isLoggedIn =this.state.isLoggedIn;
		let button;

		//based on isLoggedIn value get the button 
		if(isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick}/>;
		} else {
			button = <LoginButton onClick={this.handleLoginClick}/>
		}
		return (
			<div>
				<Greetings isLoggedIn={isLoggedIn}/>
				{button} 		
			</div>
		);
	}
}//class end

function UserGreeting() {
	return <h1>Welcome Back</h1>
}

function GuestGreeting() {
	return <h1>Please sign up</h1>
}

function Greetings(props) {
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn) {
		return <UserGreeting/>
	} else {
		return <GuestGreeting/>
	}
}

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}

export default App;
