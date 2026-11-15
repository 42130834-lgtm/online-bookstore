import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import '../styles/Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/books', label: 'Books' },
  { to: '/features', label: 'Features' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)
  const { count } = useCart()

  const toggleNavbar = () => setOpenLinks(!openLinks)
  const close = () => setOpenLinks(false)

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo-icon" aria-hidden="true">📖</span>
          <span className="logo-text">Page<span>Turner</span></span>
        </Link>

        <button
          className="menu-btn"
          type="button"
          aria-label="Open menu"
          aria-expanded={openLinks}
          onClick={toggleNavbar}
        >
          {openLinks ? '✕' : '☰'}
        </button>

        <div className={openLinks ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}
          <Link to="/cart" className="cart-link" onClick={close}>
            🛒 Cart <span className="cart-count">{count}</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
