export const toggle=(val)=>{
	console.log("action called with value, ",val)
	return {
		type:"TOGGLE_BUTTON",
		payload: {
			value: val
		}
	}
}