import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from "./Login";

describe("Test Login component", () => {
  it("Login form with two buttons", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  //TESTING EMAIL VALIDATION
  test("Should be failed on email validation", () => {
    const testEmail = "kajal@gmail.com";
    expect(validateEmail(testEmail)).toBeTruthy();
  });

  //email should expect mail
  test("Email input field should expect email", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Enter email");
    userEvent.type(email, "kajal");
    expect(email.value).not.toMatch("kajal@gmail.com");
  });

  //password input should have type password
  it("Password input should have password type", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });

  //Reset button should reset all fields
  test("Reset button resets all fields", () => {
    render(<Login />);
    const resetBtn = screen.getByTestId("reset-btn");
    const emailIn = screen.getByPlaceholderText("Enter email");
    const passIn = screen.getByPlaceholderText("Password");

    fireEvent.click(resetBtn);
    expect(emailIn.value).toMatch("");
    expect(passIn.value).toMatch("");
  });

  //SUBMIT BUTTON : POSITIVE
  test("Should be able to submit form", () => {
    render(<Login />);
    const submitBtn = screen.getByTestId("submit-btn");
    const emailIn = screen.getByPlaceholderText("Enter email");
    const passIn = screen.getByPlaceholderText("Password");
    userEvent.type(emailIn, "kajal@gmail.com");
    userEvent.type(passIn, "12345678");
    fireEvent.click(submitBtn);
    const userInfo = screen.getByText("Email ID : kajal@gmail.com");
    expect(userInfo).toBeInTheDocument();
  });

  //SUBMIT BUTTON : NEGATIVE
  test("Should print error for wrong email ID", () => {
    render(<Login />);
    const submitBtn = screen.getByTestId("submit-btn");
    const emailIn = screen.getByPlaceholderText("Enter email");
    const passIn = screen.getByPlaceholderText("Password");
    userEvent.type(emailIn, "kajal.com");
    userEvent.type(passIn, "12345678");
    fireEvent.click(submitBtn);
    const userInfo = screen.getByText("Invalid Email Entered");
    expect(userInfo).toBeInTheDocument();
  });
});
