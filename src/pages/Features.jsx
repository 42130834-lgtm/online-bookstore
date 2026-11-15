import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import '../styles/InfoPages.css'

const features = [
  { title: 'Search', text: 'Search the whole catalogue by title or author and see results as you type.' },
  { title: 'Filters and sorting', text: 'Narrow the list by category and sort by title or price.' },
  { title: 'Smart cart', text: 'Change quantities, remove books and keep your cart even after refreshing the page.' },
  { title: 'Simple checkout', text: 'A short form with clear validation messages and an order confirmation.' },
  { title: 'Works on every screen', text: 'The layout adapts from a phone to a wide desktop monitor.' },
  { title: 'Book pages', text: 'Every book has its own page with a description, price and related titles.' },
]

const services = [
  { title: 'Gift-ready books', text: 'Choose a book for someone else and we can wrap it.' },
  { title: 'Reading lists', text: 'Browse curated groups of books by category.' },
  { title: 'Customer support', text: 'Questions about an order? Use the contact page.' },
]

export default function Features() {
  return (
    <Page title="Features and services" subtitle="What you can do on PageTurner.">
      <div className="feature-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={f.title}>
            <span className="feature-num" aria-hidden="true">{i + 1}</span>
            <h2>{f.title}</h2>
            <p>{f.text}</p>
          </div>
        ))}
      </div>

      <h2 className="sub-title">Our services</h2>
      <div className="service-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <strong>{s.title}</strong>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <div className="center">
        <Link to="/books" className="btn btn-lg btn-accent">Start shopping</Link>
      </div>
    </Page>
  )
}
