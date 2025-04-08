import EntryField from "../components/EntryField.jsx"
import LinkMessage from "../components/LinkMessage.jsx"
import FormButton from "../components/FormButton.jsx"

import "./RegisterPage.css"

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Register</h1>
        <section className="main-content-register">
          <EntryField text="Username" className="entry" name="username"></EntryField>
          <EntryField text="Password" className="entry" name="password"></EntryField>
          <EntryField text="Confirm Password" className="entry" name="password"></EntryField>
          <FormButton text="Register"></FormButton>
        </section>
        <section className="link-content-register">
          <LinkMessage beforeText="Already have an account?" afterText="instead!" pagePath="/#/login" linkName="Login"></LinkMessage>
        </section>
      </div>
    </div>
  )

}

export default RegisterPage