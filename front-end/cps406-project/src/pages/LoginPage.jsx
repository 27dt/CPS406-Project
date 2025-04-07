
import "./LoginPage.css"

function LoginPage() {
  const initialValues = {username:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  }

  const handleSubmit = (e) => {

  }

  return (
    <>
      <h1>Login</h1>
      <section className="main-content login">
        <form onSubmit={handleSubmit}>\
          <EntryField 
            type="text"
            text="Username" 
            id="username" 
            name="username" 
            value={formValues.username}
            onChange={handleChange}>
          </EntryField>
          <EntryField 
            type="password"
            text="Password" 
            id="password" 
            name="password" 
            value={formValues.password}
            onChange={handleChange}>
          </EntryField>
          <FormButton text="Login"></FormButton>
        </form>
      </section>
      <section className="link-content login">
        <a href="/#/login">Forgot your password?<br></br></a>
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