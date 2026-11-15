import { useEffect } from 'react'

export default function Page({ title, subtitle, children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page container">
      {title && (
        <header className="page-head">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </header>
      )}
      {children}
    </div>
  )
}
