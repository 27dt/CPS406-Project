import ListEntry from "../components/ListEntry.jsx"
import Nav from "../components/Nav.jsx"


function DashboardPage() {

  return (
    <div className="page">
      <Nav />
      <main>
        <ListEntry 
        imageLink="https://i.pinimg.com/736x/df/fd/01/dffd015b65ed0c9b8949dc2972f77d05.jpg"
        title="Grand Theft Auto V"
        />
      </main>
    </div>
  )

}

export default DashboardPage