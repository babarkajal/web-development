
/*
create action which can be called when we submit the form and updated the name in the store
Action creators returns one object
*/
export const updateName=(name)=> {
	console.log('in action')
	return{
	type: "UPDATE_NAME",
	payload: name
	};
};
