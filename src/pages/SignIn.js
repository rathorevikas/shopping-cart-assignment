import React from "react";
import "./SignIn.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain letters.")
        .matches(/^(?!.* )/, "Password should not contain space.")
        .matches(/(?=.*?[0-9])/, "Password should have atleast one number."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="signin_container">
      <div className="signin_content">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendation.</p>
      </div>
      <div className="signin_form">
        <form onSubmit={formik.handleSubmit}>
          <div className="inputFields">
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error" tabIndex={0}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="inputFields">
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error" tabIndex={0}>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="form_button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
