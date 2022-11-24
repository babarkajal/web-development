import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import Reducers from "./reducers";

ReactDOM.render(
//  provider helps to use redux store available to the rest of your app and store is connected to the reducers that's why we have to pass the reducer parameter
  <Provider store={createStore(Reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
