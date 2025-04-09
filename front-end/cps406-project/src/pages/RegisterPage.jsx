import EntryField from "../components/EntryField.jsx"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import "./RegisterPage.css"

function RegisterPage() {
  const initialValues = {username:"", password:"", confpass:""};
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
    if (!values.username) {
      errors.username = "Username is required!";
    }

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
    <div className="register-page">
      <div className="register-box">
        <h1>Register</h1>
        <section className="main-content-register">
          <form onSubmit={handleSubmit}>
            <p className="error-msg">{formErrors.username}</p>
            <EntryField type="text" text="Username" className="r-entry" name="username" 
              value={formValues.username} onChange={handleChange}></EntryField>
            <p className="error-msg">{formErrors.password}</p>
            <EntryField type="password" text="Password" className="r-entry" name="password" 
              value={formValues.password} onChange={handleChange}></EntryField>
            <p className="error-msg">{formErrors.confpass}</p>
            <EntryField type="password" text="Confirm Password" className="r-entry" name="confpass" 
              value={formValues.confpass} onChange={handleChange}></EntryField>
            <button className="register-conf">REGISTER</button>
          </form>
        </section>
        <section className="link-content-register">
          <Link to="/login">
            <button className="register-login">ALREADY HAVE AN ACCOUNT?</button>
          </Link>
        </section>
      </div>
    </div>
  )

}

export default RegisterPage