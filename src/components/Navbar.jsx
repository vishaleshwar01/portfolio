import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">VE</span>
          <span className="logo-glow"></span>
        </Link>
        <div className="nav-menu">
          <Link to="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>
            About
          </Link>
          <Link to="/work-experience" className={isActive('/work-experience') ? 'nav-link active' : 'nav-link'}>
            Experience
          </Link>
          <Link to="/resume" className={isActive('/resume') ? 'nav-link active' : 'nav-link'}>
            Resume
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

