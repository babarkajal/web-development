import Contact from "./contact";
import About from "./about";
import Home from "./home";

//import browserRouter link from the react-router-dom
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
/*
functional component app
in this we are going to render all the other components
*/
const app = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* create the route to every component */}
	  {/* Using switch we render one match insted of multiple matches. If we skip switch then all matching components are rendered */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/about" component={About}></Route>
		<Route  path="/about" component={About}></Route>
        <Route  path="/contact" component={Contact}></Route>
      </Switch>
    </BrowserRouter>
  );
};

//export the aapp
export default app;
