// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="wave-container">
      <div className="wave-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="wave"
          alt="wave"
        />
        <h1 className="wave-heading">wave</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
