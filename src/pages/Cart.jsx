import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import BookCover from '../components/BookCover.jsx'
import Page from '../components/Page.jsx'
import '../styles/Cart.css'
import '../styles/Forms.css'

const emptyForm = { name: '', email: '', address: '' }

export default function Cart() {
  const { items, setQty, remove, clear, total, count } = useCart()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [orderNo, setOrderNo] = useState(null)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({ ...form, [name]: value })
  }

  const validate = () => {
    const e = {}
    if (form.name.trim() === '') e.name = 'Please enter your name.'
    if (!form.email.includes('@') || !form.email.includes('.')) e.email = 'Please enter a valid email.'
    if (form.address.trim().length < 5) e.address = 'Please enter your delivery address.'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setOrderNo(Math.floor(100000 + Math.random() * 900000))
      clear()
      setForm(emptyForm)
    }
  }

  if (orderNo) {
    return (
      <Page>
        <div className="message-box">
          <span className="message-icon" aria-hidden="true">🎉</span>
          <h1>Thank you for your order!</h1>
          <p>
            Your order number is <strong>#{orderNo}</strong>. This is a demo store, so nothing was charged.
          </p>
          <Link to="/books" className="btn btn-accent">Continue shopping</Link>
        </div>
      </Page>
    )
  }

  if (items.length === 0) {
    return (
      <Page>
        <div className="message-box">
          <span className="message-icon" aria-hidden="true">🛒</span>
          <h1>Your cart is empty</h1>
          <p>Add a few books and they will show up here.</p>
          <Link to="/books" className="btn btn-accent">Browse books</Link>
        </div>
      </Page>
    )
  }

  return (
    <Page title="Your cart" subtitle={`${count} ${count === 1 ? 'item' : 'items'} in your cart`}>
      <div className="cart-layout">
        <div className="cart-box">
          {items.map(({ book, qty }) => (
            <div className="cart-row" key={book.id}>
              <BookCover book={book} size="sm" />
              <div className="cart-info">
                <Link to={`/books/${book.id}`} className="cart-title">{book.title}</Link>
                <span className="cart-author">{book.author}</span>
                <span className="cart-each">${book.price.toFixed(2)} each</span>
              </div>
              <div className="qty">
                <button type="button" aria-label={`Decrease quantity of ${book.title}`} onClick={() => setQty(book.id, qty - 1)}>−</button>
                <span aria-live="polite">{qty}</span>
                <button type="button" aria-label={`Increase quantity of ${book.title}`} onClick={() => setQty(book.id, qty + 1)}>+</button>
              </div>
              <strong className="cart-line">${(book.price * qty).toFixed(2)}</strong>
              <button
                type="button"
                className="remove-btn"
                aria-label={`Remove ${book.title}`}
                onClick={() => remove(book.id)}
              >
                ✕
              </button>
            </div>
          ))}
          <div className="cart-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          <h2>Checkout</h2>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
              className={errors.name ? 'invalid' : ''} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
              className={errors.email ? 'invalid' : ''} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="field">
            <label htmlFor="address">Delivery address</label>
            <input id="address" name="address" type="text" value={form.address} onChange={handleChange}
              className={errors.address ? 'invalid' : ''} />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
          <button type="submit" className="btn btn-lg btn-accent btn-full">
            Place order · ${total.toFixed(2)}
          </button>
        </form>
      </div>
    </Page>
  )
}
