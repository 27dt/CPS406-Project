import "./Nav.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import menu from "../assets/menu.svg"
import home from "../assets/home.svg"
import search from "../assets/search.svg"
import favorite from "../assets/favorite.svg"
import settings from "../assets/settings.svg"



function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => setIsOpen(!isOpen); 

  return (
    <nav id="sidebar" className={isOpen ? "" : "close"}>
      <ul>
        <li>
          <a onClick={toggleSideBar}>
              <img className="icon" src={menu} alt="Menu button"/>
          </a>
        </li>

        <li>
          <Link to="/dashboard" >
            <img className="icon" src={home} alt="Home button"/>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/search" >
            <img className="icon" src={search} alt="Search button"/>
            <span>Search</span>
          </Link>
        </li>

        <li>
          <Link to="/settings" >
            <img className="icon" src={settings} alt="Settings button"/>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav