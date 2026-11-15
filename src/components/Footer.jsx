import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-logo">📖 PageTurner</p>
          <p className="footer-text">Classic books, delivered to your door.</p>
        </div>
        <div className="footer-links">
          <Link to="/books">Books</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <p className="footer-copy">&copy; 2026 Lebanese International University · CSCI426 Project</p>
    </footer>
  )
}
