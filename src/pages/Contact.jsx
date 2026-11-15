import { useState } from 'react'
import Page from '../components/Page.jsx'
import '../styles/Forms.css'

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({ ...form, [name]: value })
  }

  const validate = () => {
    const e = {}
    if (form.name.trim() === '') e.name = 'Please enter your name.'
    if (!form.email.includes('@') || !form.email.includes('.')) e.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10) e.message = 'Your message should have at least 10 characters.'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setSent(true)
      setForm(empty)
    }
  }

  return (
    <Page title="Contact us" subtitle="Questions about a book or an order? Send us a message.">
      <div className="contact-layout">
        <form className="form-card" onSubmit={handleSubmit} noValidate>
          {sent && (
            <div className="alert-success" role="status">
              Thank you! Your message was received.
            </div>
          )}
          <div className="field">
            <label htmlFor="name">Your name</label>
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
            <label htmlFor="subject">Subject (optional)</label>
            <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange}
              className={errors.message ? 'invalid' : ''} />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="btn btn-lg btn-accent">Send message</button>
        </form>

        <aside className="info-card">
          <h2>Visit or write to us</h2>
          <p><span aria-hidden="true">📍</span> <strong>Address:</strong> Beirut, Lebanon</p>
          <p><span aria-hidden="true">✉️</span> <strong>Email:</strong> larafaour@gmail.com</p>
          <p><span aria-hidden="true">🕘</span> <strong>Hours:</strong> Monday to Saturday, 9:00 to 18:00</p>
        </aside>
      </div>
    </Page>
  )
}
