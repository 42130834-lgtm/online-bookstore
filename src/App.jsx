import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LibraryBackground from './components/LibraryBackground.jsx'
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import BookDetails from './pages/BookDetails.jsx'
import Cart from './pages/Cart.jsx'
import Features from './pages/Features.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { books, categories, categorySlug } from './data/books.js'

export default function App() {
  return (
    <div className="app">
      <LibraryBackground />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books key="all" startCategory="All" />} />

          {/* One page for every category: /books/category/gothic */}
          {categories.map((c) => (
            <Route
              key={c}
              path={`/books/category/${categorySlug(c)}`}
              element={<Books key={c} startCategory={c} />}
            />
          ))}

          {/* One page for every book: /books/1, /books/2  */}
          {books.map((b) => (
            <Route key={b.id} path={`/books/${b.id}`} element={<BookDetails key={b.id} book={b} />} />
          ))}

          <Route path="/cart" element={<Cart />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
