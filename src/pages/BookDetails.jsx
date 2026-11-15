import { useState } from 'react'
import { Link } from 'react-router-dom'
import { books, categorySlug } from '../data/books.js'
import BookCover from '../components/BookCover.jsx'
import BookCard from '../components/BookCard.jsx'
import Page from '../components/Page.jsx'
import { useCart } from '../context/CartContext.jsx'
import '../styles/BookDetails.css'

export default function BookDetails({ book }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const related = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4)

  const changeQty = (value) => {
    if (value >= 1 && value <= 20) setQty(value)
  }

  const handleAdd = () => {
    add(book.id, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Page>
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link to="/books">Books</Link>
        <span>/</span>
        <Link to={`/books/category/${categorySlug(book.category)}`}>{book.category}</Link>
        <span>/</span>
        <span className="current">{book.title}</span>
      </nav>

      <div className="details">
        <div className="details-cover">
          <BookCover book={book} size="lg" />
        </div>

        <div className="details-info">
          <span className="badge">{book.category}</span>
          <h1>{book.title}</h1>
          <p className="details-author">by {book.author} · {book.year}</p>
          <p className="details-price">${book.price.toFixed(2)}</p>
          <p className="details-text">{book.description}</p>

          <div className="buy-box">
            <div>
              <span className="qty-label">Quantity</span>
              <div className="qty">
                <button type="button" aria-label="Decrease quantity" onClick={() => changeQty(qty - 1)}>−</button>
                <span aria-live="polite">{qty}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => changeQty(qty + 1)}>+</button>
              </div>
            </div>
            <button type="button" className="btn btn-lg btn-accent" onClick={handleAdd}>
              Add to cart · ${(book.price * qty).toFixed(2)}
            </button>
            <Link to="/cart" className="btn btn-lg btn-outline">Go to cart</Link>
          </div>

          {added && <div className="alert-success" role="status">✓ Added to your cart.</div>}
        </div>
      </div>

      {related.length > 0 && (
        <section className="related">
          <h2>More in {book.category}</h2>
          <div className="book-grid">
            {related.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </section>
      )}
    </Page>
  )
}
