import {useState, useEffect} from "react";

import EntryField from "../components/EntryField.jsx"
import LinkMessage from "../components/LinkMessage.jsx"
import FormButton from "../components/FormButton.jsx"

import "./LoginPage.css"

function LoginPage() {
  const initialValues = {username:"", password:""};
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
      errors.password = "Password must be at least 6 characters!"
    } else if (values.password.length > 200) {
      errors.password = "Password must be less than 200 cha... wait why did you-"
    }
    return errors;
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>

        <section className="main-content-login">
          <form onSubmit={handleSubmit}>
            <EntryField 
              className="entry"
              type="text"
              text="Username" 
              name="username" 
              value={formValues.username}
              onChange={handleChange}>
            </EntryField>
            <EntryField 
              className="entry"
              type="password"
              text="Password" 
              name="password" 
              value={formValues.password}
              onChange={handleChange}>
            </EntryField>
            <FormButton className="login-btn" text="Login"></FormButton>
          </form>
        </section>

        <section className="link-content-login">
          <a href="/#/login">Forgot your password?<br></br></a>
          <LinkMessage 
            beforeText="Don't have an account?" 
            afterText="instead!" 
            pagePath="/#/register" 
            linkName="Register">
          </LinkMessage>
        </section>
      </div>
    </div>
  )
}

export default LoginPage