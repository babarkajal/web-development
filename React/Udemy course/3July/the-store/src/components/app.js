import React ,{useState}from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./products";
import Navbar from "./navbar";
import Home from "./home";
import Cart from "./cart";
import ProductOverview from './product-overview'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/home" component={Home} />
        <Route path="/cart" component={Cart} />
		<Route path="/details" component={ProductOverview}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
