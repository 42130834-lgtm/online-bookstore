import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'

export default function NotFound({ message = 'The page you are looking for does not exist.' }) {
  return (
    <Page>
      <div className="message-box">
        <p className="big-404">404</p>
        <h1>Page not found</h1>
        <p>{message}</p>
        <Link to="/" className="btn btn-accent">Back to home</Link>
      </div>
    </Page>
  )
}
