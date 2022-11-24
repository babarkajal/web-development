import {combineReducers} from 'redux'
const toggleFun=(value=false,action)=>{
	console.log("Reducer is called,",action)
	if(action.type==="TOGGLE_BUTTON") {
		console.log('in if',!action.payload.value)
		return !action.payload.value;
	}
	return value;
}

export default combineReducers({
	toggleButton: toggleFun
});