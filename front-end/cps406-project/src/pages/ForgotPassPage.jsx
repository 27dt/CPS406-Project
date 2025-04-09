import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import EntryField from "../components/EntryField.jsx"

import "./ForgotPassPage.css"

function ForgotPassPage() {
  const initialValues = {password:"", confpass:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect (() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 5) {
      errors.password = "Must be at least 6 characters!"
    } else if (values.password.length > 200) {
      errors.password = "Don't be stupid."
    }

    if (!values.confpass) {
      errors.confpass = "Please confirm your password!";
    } else if (values.confpass != values.password) {
      errors.confpass = "Passwords do not match!";
    } 

    return errors;
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h1>Forgot Password</h1>
        <section className="main-content-reset">
          <form onSubmit={handleSubmit}>
            <p className="error-msg">{formErrors.password}</p>
            <EntryField 
              className="forgot-entry"
              type="password"
              text="Password" 
              name="password" 
              value={formValues.password}
              onChange={handleChange}>
            </EntryField>
            <p className="error-msg">{formErrors.confpass}</p>
            <EntryField 
              className="forgot-entry"
              type="password"
              text="Confirm Password" 
              name="confpass" 
              value={formValues.confpass}
              onChange={handleChange}>
            </EntryField>
            <button className="reset-btn">RESET PASSWORD</button>
          </form>
        </section>
        <section className="link-content-reset">
          <Link to="/register">
            <button className="forgot-register-btn">DON'T HAVE AN ACCOUNT?</button>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default ForgotPassPage