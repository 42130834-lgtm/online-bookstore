import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookCover from './BookCover.jsx'
import { useCart } from '../context/CartContext.jsx'
import '../styles/BookCard.css'

export default function BookCard({ book }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    add(book.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className="book-card">
      <Link to={`/books/${book.id}`} className="book-card-cover" aria-label={`View ${book.title}`}>
        <BookCover book={book} />
      </Link>
      <div className="book-card-body">
        <span className="badge">{book.category}</span>
        <h3 className="book-card-title">
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </h3>
        <p className="book-card-author">{book.author}</p>
        <div className="book-card-bottom">
          <strong className="price">${book.price.toFixed(2)}</strong>
          <button
            type="button"
            className={added ? 'btn btn-sm btn-done' : 'btn btn-sm btn-accent'}
            onClick={handleAdd}
          >
            {added ? '✓ Added' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
