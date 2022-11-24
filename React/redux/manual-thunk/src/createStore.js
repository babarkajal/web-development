/**
 * CreateStore will create store for storing application data
 */
import { applyMiddleware, createStore } from "redux";
import { logActivityMiddleware } from "./middlewares/logActivityMiddleware";
import productReducer from "./reducers";

/**
 * to create to reducer is compulsory other parameters like prevState, and enhancer are not mandatory
 */
const store = createStore(
  productReducer,
  undefined,
  applyMiddleware(logActivityMiddleware)
);

store.subscribe(() => {
  console.log("STATE AFTER DISPATCH ", store.getState());
});
export default store;
