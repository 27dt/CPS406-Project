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
    <>
      <h1>Login</h1>
      <section className="main-content login">
        <form onSubmit={handleSubmit}>
          <EntryField 
            type="text"
            text="Username" 
            id="username" 
            name="username" 
            value={formValues.username}
            onChange={handleChange}>
          </EntryField>
          <p>{formErrors.username}</p>
          <EntryField 
            type="password"
            text="Password" 
            id="password" 
            name="password" 
            value={formValues.password}
            onChange={handleChange}>
          </EntryField>
          <p>{formErrors.password}</p>
          <FormButton text="Login"></FormButton>
        </form>
      </section>
      <section className="link-content login">
      <LinkMessage 
          beforeText="Forgot your password?" 
          afterText=" to reset it!" 
          pagePath="/#/forgotpassword" 
          linkName="Click here">
        </LinkMessage>
        <LinkMessage 
          beforeText="Don't have an account?" 
          afterText="instead!" 
          pagePath="/#/register" 
          linkName="Register">
        </LinkMessage>
      </section>
    </>
  )
}

export default LoginPage