import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./Reducers";

//PERSIST THE STORE IN LOCAL STORAGE
const persistStateToLocalStorage = function (prevState) {
  try {
    const serializedState = JSON.stringify(prevState);
    localStorage.setItem("socialMedia", serializedState);
  } catch (e) {
    console.log(e);
  }
};

//FETCH THE STORE FROM LOCAL STORAGE
const fetchPersistedStateFromLocalStorage = function () {
  try {
    const serializedState = localStorage.getItem("socialMedia");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
  }
};

const persistedState = fetchPersistedStateFromLocalStorage();

//create data store using reducers, persistState and middleware
const dataStore = createStore(
  Reducers,
  persistedState,
  applyMiddleware(ReduxThunk)
);

dataStore.subscribe(() => persistStateToLocalStorage(dataStore.getState()));

export default dataStore;
