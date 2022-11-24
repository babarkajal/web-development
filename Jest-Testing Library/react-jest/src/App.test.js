import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Components/Counter";

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//test block
test("Increments counter", () => {
  // render the component on virtual dom
  render(<Counter />);

  //select the elements you want to interact with
  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");

  //interact with those elements
  fireEvent.click(incrementBtn);

  //assert the expected result
  expect(counter).toHaveTextContent("1");
});
