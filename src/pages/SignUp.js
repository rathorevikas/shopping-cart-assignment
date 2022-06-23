import React from "react";
import "./SignIn.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string().required("First Name Required"),
      lname: Yup.string().required(" Last Name Required!"),
      email: Yup.string().email("Invalid email address").required("Email Required!"),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain letters.")
        .matches(/^(?!.* )/, "Password should not contain space.")
        .matches(/(?=.*?[0-9])/, "Password should have atleast one number."),
      confirmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="signin_container">
      <div className="signin_content">
        <h1>SignUp</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="signin_form">
        <form onSubmit={formik.handleSubmit}>

        <div className="inputFields">
            <TextField
              id="fname"
              name="fname"
              type="fname"
              label="First Name"
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fname}
            />
            {formik.touched.fname && formik.errors.fname ? (
              <div className="error" tabIndex={0}>{formik.errors.fname}</div>
            ) : null}
          </div>

          <div className="inputFields">
          <TextField
              id="lname"
              name="lname"
              type="lname"
              label="Last Name"
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lname}
            />
            {formik.touched.lname && formik.errors.lname ? (
              <div className="error" tabIndex={0}>{formik.errors.lname}</div>
            ) : null}
          </div>

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

          <div className="inputFields">
            <TextField
              id="confirmpassword"
              name="confirmpassword"
              type="confirmpassword"
              label="Confirm Password"
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <div className="error" tabIndex={0}>{formik.errors.confirmpassword}</div>
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

export default SignUp;
