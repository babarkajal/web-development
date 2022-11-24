import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { HOME, LOGIN } from "../routes";
import Home from "./Home";
import Login from "./Login";

function RouterComponent(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
