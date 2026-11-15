import { useState } from 'react'

// Shows /public/covers/<id>.jpg. If the picture is missing, it draws a coloured cover instead.
export default function BookCover({ book, size = 'md' }) {
  const [failed, setFailed] = useState(false)
  const label = `Cover of ${book.title} by ${book.author}`

  if (!failed) {
    return (
      <img
        src={`/online-bookstore/covers/${book.id}.jpg`}
        alt={label}
        className={`cover cover-${size}`}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div
      className={`cover cover-${size} cover-drawn`}
      style={{ background: `linear-gradient(145deg, ${book.colors[0]}, ${book.colors[1]})` }}
      role="img"
      aria-label={label}
    >
      <span className="cover-title">{book.title}</span>
      <span className="cover-author">{book.author}</span>
    </div>
  )
}
