import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const nameReducer=(state=[],action)=> {
	switch(action) {
		case "UPDATE_FORM":
			return action.payload;
		default:
			return state;
	}
}	

export default combineReducers({
	form: formReducer,
	name: nameReducer
})