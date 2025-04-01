import Nav from "../components/Nav.jsx"

function SettingsPage() {

  return (
    <div className="page">
      <Nav />
      <main>
        <section id="text">
          <div id="wrapper">
            <p id="title">Title</p>
            <sub id="year">,year</sub>
          </div>
          <p id="rating">mixed(1231)</p>
          <p id="genre">Action</p>
        </section>
      </main>
    </div>
  )

}

export default SettingsPage