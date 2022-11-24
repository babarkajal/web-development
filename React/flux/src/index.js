import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

//Provider makes store object to be available to all components
// ReactDOM.render(<App />, document.getElementById("root"));

//REACT v18 syntax for creating root
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
