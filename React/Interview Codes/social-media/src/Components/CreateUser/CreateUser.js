/**
 ** Create User: Functional component to create a new user
 * Validation using Formik and yup
 */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CreateUserAction,
  GetListOfUsers,
  ShowAlert,
} from "../../Actions/UsersActions";
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
  const [processing, setProcess] = useState(false);
  //ON SUBMIT CALL API
  const createUser = async (values) => {
    const reqBody = {
      data: values,
    };
    setProcess(true);
    const response = await CreateUserAction(reqBody);
    if (response.status === 200) {
      dispatch(
        ShowAlert({ type: "SUCCESS", message: "User Created Successfully" })
      );

      //GET USERS LIST
      dispatch(GetListOfUsers());
      setProcess(false);
    } else {
      dispatch(
        ShowAlert({ type: "ERROR", message: "Email ID must be unique" })
      );
      setProcess(false);
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-container-heading Heading">
          Create an account
        </div>

        {/* FORM  */}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
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
                {processing ? (
                  <img src="./assets/loader.svg" alt="" />
                ) : (
                  <button type="submit">Submit</button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateUser;
