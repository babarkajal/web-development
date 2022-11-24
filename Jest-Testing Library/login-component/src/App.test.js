import { render, screen } from "@testing-library/react";
import App from "./App";

test("App Component renders text Login Component", () => {
  render(<App />);
  const textNode = screen.getByText(/Login Component/);
  expect(textNode).toBeInTheDocument();
});

//test child component rendered

test("App renders Login page successfully", () => {
  render(<App />);
  //     const childComponent = screen.getByLabelText("Email address");
  const emailInput = screen.getByTestId("loginForm");
  //   expect(childComponent).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});
