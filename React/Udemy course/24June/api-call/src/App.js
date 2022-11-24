import React from 'react'
import axios from 'axios'
import "./app.css"
const instance = axios.create({
	method: "get",
	baseURL: "https://reqres.in",
	timeout:1000
});


class App extends React.Component {
	//initialize the state
	state ={name:'', job:''}

	//bind the method using constructor
	constructor(props){
		super(props);
		this.postData = this.postData.bind(this);
	}

	//get the data from api
	getData(){
		//it gets the data from web
		instance.get('/api/users').then(response => {
			console.log(response);
		});
	}

	//update the state property name
	updateName=(event)=>{
		this.setState({name:event.target.value})
	}	

	//update the job property
	updateJob=(event)=>{
		this.setState({job:event.target.value})
	}

	//this adds the data and it can be visible in console. 
	postData(){
		axios.post('https://reqres.in/api/users',{
			name: this.state.name,
			job: this.state.job
		}).then(response=>{console.log(response)})
		.catch( (error)=> {
			console.log("There is some Error")
		})
		.then(function(){
			console.log("always executed")
		})
	}

	//delete api
	deleteData(){
		axios.delete('https://reqres.in/api/users/2').then((response)=> {
			console.log(response);
		});
	}

	render() {
		return(
			<div>Enter name: 
				<input type="text" id='firstname' onChange={this.updateName}/>
				<br/>
				Enter job designation: 
				<input type="type" id="job" onChange={this.updateJob}/>
				<br/>
				<button onClick={this.getData}>Get data</button>
				<button onClick={this.postData}>Put data</button>
				<br/>
				<button onClick={this.deleteData}>Delete user</button>
			</div>
		)
	}
}

export default App;