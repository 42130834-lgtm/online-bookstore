import Page from '../components/Page.jsx'
import '../styles/InfoPages.css'

const values = [
  'Simple design that puts the books first',
  'Accessibility: readable text, labels on every field and keyboard-friendly buttons',
  'A site that works the same on a phone and on a computer',
]

export default function About() {
  return (
    <Page title="About PageTurner">
      <div className="about">
        <p className="lead">
          PageTurner is a small online bookstore for people who enjoy classic stories. It was built as the first
          phase of the CSCI426 Advanced Web Programming project.
        </p>

        <h2>Our idea</h2>
        <p>
          Finding a good book online should be quick. PageTurner keeps things simple: a clear catalogue, honest
          descriptions, fast search and a cart that is easy to use on a phone.
        </p>

        <h2>What we value</h2>
        <ul className="check-list">
          {values.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>

        <h2>About the project</h2>
        <p>
          The site is a front-end application written with React and React Router. The catalogue is stored in a
          data file, the cart is saved in the browser with localStorage, and no payment is taken. It shows how a
          real shop would look and behave.
        </p>
        <p className="muted">Developed by Lara Faour, Lebanese International University.</p>
      </div>
    </Page>
  )
}
