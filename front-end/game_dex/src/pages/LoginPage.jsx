import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EntryField from "../components/EntryField.jsx"
import "./LoginPage.css"

function LoginPage() {
  const initialValues = {username: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>

        <section className="main-content-login">
          <form onSubmit={handleSubmit}>
            <p className="error-msg">{formErrors.username}</p>
            <EntryField 
              className="entry"
              type="text"
              text="Username" 
              name="username" 
              value={formValues.username}
              onChange={handleChange}>
            </EntryField>
            <p className="error-msg">{formErrors.password}</p>
            <EntryField 
              className="entry"
              type="password"
              text="Password" 
              name="password" 
              value={formValues.password}
              onChange={handleChange}>
            </EntryField>
            <button className="login-btn">LOGIN</button>
          </form>
        </section>

        <section className="link-content-login">
          <Link to="/register">
            <button className="register-btn">SIGN UP</button>
          </Link>
          <Link to="/forgotpassword">
            <button className="forgot-btn">FORGOT PASSWORD</button>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default LoginPage