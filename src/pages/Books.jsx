import { useState } from 'react'
import { books, categories } from '../data/books.js'
import BookCard from '../components/BookCard.jsx'
import Page from '../components/Page.jsx'
import '../styles/Books.css'

export default function Books({ startCategory }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(startCategory)
  const [sort, setSort] = useState('title')

  const term = search.trim().toLowerCase()
  const filtered = books.filter(
    (b) =>
      (category === 'All' || b.category === category) &&
      (term === '' || b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term))
  )

  const list = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    return a.title.localeCompare(b.title)
  })

  return (
    <Page
      title={category === 'All' ? 'All books' : category}
      subtitle="Search, filter and sort our collection of classics."
    >
      <div className="filters">
        <div className="field">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="search"
            placeholder="Title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="sort">Sort by</label>
          <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="title">Title (A-Z)</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </div>
      </div>

      <p className="result-count">
        {list.length} {list.length === 1 ? 'book' : 'books'} found
      </p>

      {list.length === 0 ? (
        <div className="empty-box">No books match your search. Try another word or category.</div>
      ) : (
        <div className="book-grid">
          {list.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      )}
    </Page>
  )
}
