import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/PAA.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }) => (isActive ? 'active' : '')
  const closeMenu = () => setOpen(false)

  return (
    <nav>
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="Premier AgriBusiness Academy" />
      </Link>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
      </button>

      <ul className={open ? 'nav-links open' : 'nav-links'}>
        <li><NavLink to="/" end className={linkClass} onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about-us" className={linkClass} onClick={closeMenu}>About Us</NavLink></li>
        <li><NavLink to="/programmes" className={linkClass} onClick={closeMenu}>Programmes</NavLink></li>
        <li><NavLink to="/consultancy" className={linkClass} onClick={closeMenu}>Consultancy</NavLink></li>
        <li><NavLink to="/partnership" className={linkClass} onClick={closeMenu}>Partnerships</NavLink></li>
        <li><NavLink to="/media" className={linkClass} onClick={closeMenu}>Media</NavLink></li>
        <li><NavLink to="/contact-us" className={linkClass} onClick={closeMenu}>Contact Us</NavLink></li>
      </ul>
    </nav>
  )
}