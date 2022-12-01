import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import dataStore from "./configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={dataStore}>
    <App />
  </Provider>
);
