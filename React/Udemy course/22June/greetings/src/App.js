//create class
import React from 'react'
import ShowTime from './ShowTime'
import Greetings from './Greetings';

//app which is used to render main components
const App=()=>{
		return(
			<div>
				<ShowTime/>

				{/* send date hrs as props*/}
				<Greetings hrs={new Date().getHours({hours12:true})}/>
			</div>
		);
}

export default App;