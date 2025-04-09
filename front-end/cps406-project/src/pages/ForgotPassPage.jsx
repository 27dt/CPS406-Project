import {useState, useEffect} from "react";

import EntryField from "../components/EntryField.jsx"
import LinkMessage from "../components/LinkMessage.jsx"
import FormButton from "../components/FormButton.jsx"

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
        errors.password = "Password must be at least 6 characters!"
      } else if (values.password.length > 200) {
        errors.password = "Password must be less than 200 cha... wait why did you-"
      }
  
      if (!values.confpass) {
        errors.confpass = "Please confirm your password!";
      } else if (values.confpass != values.password) {
        errors.confpass = "Passwords do not match!";
      } 

      return errors;
    };
  
    return (
      <>
        <h1>Forgot Password</h1>
        <section className="main-content reset">
          <form onSubmit={handleSubmit}>
            <EntryField 
              type="password"
              text="Password" 
              id="password" 
              name="password" 
              value={formValues.password}
              onChange={handleChange}>
            </EntryField>
            <p>{formErrors.password}</p>
            <EntryField 
              type="password"
              text="Confirm Password" 
              id="confpassword" 
              name="confpassword" 
              value={formValues.confpass}
              onChange={handleChange}>
            </EntryField>
            <p>{formErrors.confpass}</p>
            <FormButton text="Reset Password"></FormButton>
          </form>
        </section>
        <section className="link-content reset">
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

export default ForgotPassPage