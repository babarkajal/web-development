/* 
In this file we will create one form with two input fields and two buttons using functional components. In this project We will learn how to components decomposition and composition
*/


//create input component
function Input(props) {
	return (
		<div> 
			{props.label} 
			<input type="text" className = "inputfield"/>
		</div>
	)
}


//create button component 
function Button(props) {
	return (
		<button> {props.val}</button>
	)
}
//create form component
function Form() {
	return (
		<div className = "form-style"> 
			<Input label = "First Name: " />
			<Input label = "Last Name: "/>
			<Button val = "Submit"/>
			<Button val = "Cancel" />
		</div>
	)
}
const App = () => {
	//return the form component 
	return <Form/>
}

export default App;