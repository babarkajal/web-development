/**
 * CreateStore will create store for storing application data
 */
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { sayHiOnDispatch } from "./enhancers";
import { exampleMiddleWare } from "./middleware";
import rootReducer from "./reducers";

//INSTEAD IF COMPOSE, USE composeWithDevtools
// const enhancerMiddleware = compose(
//   sayHiOnDispatch,
//   applyMiddleware(exampleMiddleWare)
// );
const enhancerMiddleware = composeWithDevTools(
  sayHiOnDispatch,
  applyMiddleware(exampleMiddleWare)
);

/**
 * to create to reducer is compulsory other parameters like prevState, and enhancer are not mandatory
 */
const store = createStore(rootReducer, undefined, enhancerMiddleware);

store.subscribe(() => {
  console.log("STATE AFTER DISPATCH ", store.getState());
});
export default store;
