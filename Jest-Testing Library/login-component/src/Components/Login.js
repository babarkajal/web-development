import React from "react";
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  const onSubmit = () => {
    const child = document.createElement("div");
    if (validateEmail(email)) {
      child.setAttribute("class", "alert alert-success");
      child.textContent = "Email ID : " + email;
    } else {
      child.setAttribute("class", "alert alert-danger");
      child.textContent = "Invalid Email Entered";
    }
    document.body.appendChild(child);
  };

  return (
    <div data-testid="loginForm">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        // type="submit"
        className="btn btn-primary"
        data-testid="submit-btn"
        onClick={onSubmit}
      >
        Submit
      </button>
      <button className="btn btn-light" data-testid="reset-btn">
        Reset
      </button>
    </div>
  );
}

export default Login;

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};
