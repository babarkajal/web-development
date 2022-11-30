import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserAction, ShowAlert } from "../../Actions/UsersActions";
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

function CreateUser(props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e, fn) => {
    fn(e.target.value);
  };

  const createUser = async () => {
    const reqBody = {
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
      },
    };
    const response = await CreateUserAction(reqBody);
    if (response.status === 200) {
      //   console.log(response);
      dispatch(
        ShowAlert({ type: "SUCCESS", message: "User Created Successfully" })
      );
      setLastName("");
      setFirstName("");
      setEmail("");
    } else {
      //   console.log(response);
      dispatch(ShowAlert({ type: "ERROR", message: response?.message }));
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-container-heading Heading">
          Create an account
        </div>

        <div className="signup-container-field">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => handleInput(e, setFirstName)}
          />
        </div>
        <div className="signup-container-field">
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => handleInput(e, setLastName)}
            value={lastName}
          />
        </div>
        <div className="signup-container-field">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => handleInput(e, setEmail)}
            value={email}
          />
        </div>

        <div className="submit">
          <input type="submit" value="Submit" onClick={createUser} />
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
