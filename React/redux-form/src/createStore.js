/**
 * CreateStore will create store for storing application data
 */
import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
