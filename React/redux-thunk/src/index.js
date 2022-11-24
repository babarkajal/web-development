import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./createStore";

//Provider makes store object to be available to all components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
