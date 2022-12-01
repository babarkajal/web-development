import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserAction, ShowAlert } from "../../Actions/UsersActions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function CreateUser(props) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");

  const createUser = async (values) => {
    const reqBody = {
      data: values,
    };
    const response = await CreateUserAction(reqBody);
    if (response.status === 200) {
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
        <Formik
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            email: email,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            createUser(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-wrappers">
                <div className="signup-container-field">
                  <Field name="firstName" placeholder="First Name" />
                  {errors.firstName && touched.firstName ? (
                    <div className="error">{errors.firstName}</div>
                  ) : null}
                </div>
                <div className="signup-container-field">
                  <Field name="lastName" placeholder="Last Name" />
                  {errors.lastName && touched.lastName ? (
                    <div className="error">{errors.lastName}</div>
                  ) : null}
                </div>
                <div className="signup-container-field">
                  <Field name="email" type="email" placeholder="Email Id" />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateUser;
//   <div className="signup-container-field">
//     <input
//       type="text"
//       placeholder="First Name"
//       value={firstName}
//       onChange={(e) => handleInput(e, setFirstName)}
//     />
//   </div>
//   <div className="signup-container-field">
//     <input
//       type="text"
//       placeholder="Last Name"
//       onChange={(e) => handleInput(e, setLastName)}
//       value={lastName}
//     />
//   </div>
//   <div className="signup-container-field">
//     <input
//       type="email"
//       placeholder="Email"
//       onChange={(e) => handleInput(e, setEmail)}
//       value={email}
//     />
//   </div>
//     <div className="submit">
//     <input type="submit" value="Submit" onClick={createUser} />
//   </div>
