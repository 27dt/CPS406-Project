import { useContext, useEffect, useState } from "react"
import EntryField from "../components/EntryField.jsx"
import Modal from "../components/Modal.jsx"
import Nav from "../components/Nav.jsx"
import { UserContext } from "../App.jsx"
import pfp from "../assets/default_pfp.jpg"
import editIcon from "../assets/edit.svg"

import "./SettingsPage.css"


function SettingsPage() {

  const {userState, userDispatch} = useContext(UserContext);

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const initialValues = {username: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    handleSubmit()
  }, [isValid])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  };

  const handleSubmit = () => {
    if (isValid){
      userDispatch({type: 'update-username', payload: formValues.username});
      userDispatch({type: 'update-password', payload: formValues.password});
  
      setFormValues(initialValues);
      setModalIsOpen(false);
      setIsValid(false);
    }
  };

  const validate = (e, values) => {
    e.preventDefault();
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
    setFormErrors(errors)
    if (Object.keys(errors).length == 0) {
      setIsValid(true);
    } 
  };


  return (
    <div className="page">
      <Nav />
      <main id="settings-page">
        <h1>Settings</h1>
        <hr />
        <h2>Account Details</h2>
        <div id="account">
          <img 
            src={pfp}
            alt="Profile Picture"
          />
          <div id="account-info">
            <h3>Username: {userState.username}</h3>
            <h3>Password: {userState.password}</h3>
          </div>
          <div className="button-bg" onClick={() => {setModalIsOpen(true)}}>
            <img 
              className="icon" 
              src={editIcon} 
              alt='edit button'
            />
          </div>
          <Modal open={modalIsOpen} onClose={() => {setModalIsOpen(false)}}>
            <form id="update-modal" onSubmit={(e) => validate(e, formValues)}>
              <p className="error-msg">{formErrors.username}</p>
              <EntryField 
                className="entry"
                type="text"
                text="New Username" 
                name="username" 
                value={formValues.username}
                onChange={handleChange}>
              </EntryField>
              <p className="error-msg">{formErrors.password}</p>
              <EntryField 
                className="entry"
                type="password"
                text="New Password" 
                name="password" 
                value={formValues.password}
                onChange={handleChange}>
              </EntryField>
              <button className="login-btn">LOGIN</button>
            </form>
          </Modal>
        </div>
        <hr />
        <h2>Preferences</h2>
      </main>
    </div>
  )

}

export default SettingsPage