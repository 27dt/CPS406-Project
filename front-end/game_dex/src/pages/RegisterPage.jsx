import EntryField from "../components/EntryField.jsx"
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../App.jsx" 

import "./RegisterPage.css"

const api = import.meta.env.VITE_API_URL;

async function register(formValues, dispatch, navigate) {
  delete formValues.confpass;
  
  let user = (fetch(`${api}/users/add`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formValues)
  }).then((res) => res.json()));
  
  navigate('/dashboard');
  dispatch({type: 'login', username: await user.username, password: await user.password, uid: await user.uid})
}


function RegisterPage() {
  const initialValues = {username:"", password:"", confpass:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  
  const [isValid, setIsValid] = useState(false);

  const {userState, userDispatch} = useContext(UserContext)

  const navigate = useNavigate();

  useEffect(() => {
    if (isValid) {
      register(formValues, userDispatch, navigate)
    }
  }, [isValid])

  const handleChange = (e) => {
    console.log("API URL: ", api)
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

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

    if (Object.keys(errors).length == 0) {
      setIsValid(true);
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