import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { books, categories, categorySlug } from '../data/books.js'
import BookCard from '../components/BookCard.jsx'
import libraryBg from '../assets/library-bg.avif'
import '../styles/Home.css'

const perks = [
  { icon: '🔎', title: 'Find it fast', text: 'Search by title or author and filter by category.' },
  { icon: '🛒', title: 'Easy cart', text: 'Change quantities any time. Your cart stays after a refresh.' },
  { icon: '📱', title: 'Any screen', text: 'Shop the same way on a phone, tablet or computer.' },
]

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const countIn = (c) => books.filter((b) => b.category === c).length
  const featured = books.filter((b) => b.featured).slice(0, 4)

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${libraryBg})` }}>
        <div className="container hero-inner">
          <p className="hero-tag">Online bookstore · Classic stories</p>
          <h1>Find your next great read</h1>
          <p className="hero-text">
            Browse timeless classics, search by title or author and add your favourites to the cart in a few clicks.
          </p>
          <div className="hero-buttons">
            <Link to="/books" className="btn btn-lg btn-accent">Browse books</Link>
            <Link to="/features" className="btn btn-lg btn-light">See features</Link>
          </div>
          <div className="hero-stats">
            <div><strong>{books.length}</strong><span>classic books</span></div>
            <div><strong>{categories.length}</strong><span>categories</span></div>
            <div><strong>$8.50</strong><span>books from</span></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Featured books</h2>
          <Link to="/books" className="link-arrow">View all →</Link>
        </div>
        <div className="book-grid">
          {featured.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <h2>Shop by category</h2>
          </div>
          <div className="category-grid">
            {categories.map((c) => (
              <Link key={c} to={`/books/category/${categorySlug(c)}`} className="category-tile">
                <strong>{c}</strong>
                <span>{countIn(c)} {countIn(c) === 1 ? 'book' : 'books'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="perk-grid">
          {perks.map((p) => (
            <div key={p.title} className="perk">
              <span className="perk-icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
