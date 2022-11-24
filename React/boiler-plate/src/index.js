import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./action-reducer";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

const persistStateToLocalStorage = function (prevState) {
  try {
    const serializedState = JSON.stringify(prevState);
    localStorage.setItem("store", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const fetchPersistedStateFromLocalStorage = function () {
  try {
    const serializedState = localStorage.getItem("store");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
  }
};

const persistedState = fetchPersistedStateFromLocalStorage();

//create a store
const store = createStore(reducer, persistedState, applyMiddleware(ReduxThunk));
store.subscribe(() => persistStateToLocalStorage(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
