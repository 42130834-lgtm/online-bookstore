import { createContext, useContext, useEffect, useState } from 'react'
import { books } from '../data/books.js'

const CartContext = createContext(null)
const STORAGE_KEY = 'pageturner-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const add = (id, qty = 1) => {
    const found = items.find((i) => i.id === id)
    if (found) {
      setItems(items.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i)))
    } else {
      setItems([...items, { id, qty }])
    }
  }

  const setQty = (id, qty) => {
    if (qty <= 0) {
      setItems(items.filter((i) => i.id !== id))
    } else {
      setItems(items.map((i) => (i.id === id ? { ...i, qty } : i)))
    }
  }

  const remove = (id) => setItems(items.filter((i) => i.id !== id))
  const clear = () => setItems([])
  const detailed = items
    .map((i) => ({ ...i, book: books.find((b) => b.id === i.id) }))
    .filter((i) => i.book)

  let count = 0
  let total = 0
  detailed.forEach((i) => {
    count += i.qty
    total += i.qty * i.book.price
  })

  return (
    <CartContext.Provider value={{ items: detailed, add, setQty, remove, clear, count, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
