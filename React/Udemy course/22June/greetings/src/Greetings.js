
//we get hrs as props 
const Greetings = (props) => {
	//store the value
	let hrs = props.hrs;

	if(hrs >= 6 && hrs<12) {
		return <h1>Good Morning</h1>
	}

	else if(hrs>=12 && hrs<16) {
		return <h1>Good Afternoon</h1>
	}

	else if(hrs>=16 && hrs<20) {
		return <h1>Good Evening</h1>
	}
	
	else{
		return <h1>Good Night</h1>
	}
} 

export default Greetings;