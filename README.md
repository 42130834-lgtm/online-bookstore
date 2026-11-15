# PageTurner – Online Bookstore

PageTurner is a small online bookstore for classic books. Visitors can browse the catalogue, search and filter books, open a page for each book, add books to a cart and place a demo order.

This project is **Phase 1 (Front-End Development)** of the CSCI426 Advanced Web Programming course at the Lebanese International University (Fall 2026).

**Live site:** https://42130834-lgtm.github.io/online-bookstore/

---

## Features

- **Home page** with a hero section, featured books and shop-by-category tiles
- **Books page** with live search (title or author), category filter and sorting by title or price
- **Book details page** for every book, with quantity picker and related books
- **Shopping cart**: add, remove and change quantities; the total updates live
- **Cart saved in localStorage**, so it stays after a page refresh
- **Checkout form** and **Contact form** with validation messages
- **Responsive design** for phones, tablets and computers (menu button on small screens)
- **404 page** for links that do not exist

## Technologies used

| Technology | Why |
|---|---|
| React 18 | Builds the user interface from reusable components |
| React Router 6 | Moves between pages without reloading the site |
| Vite | Runs the project during development and builds it for the web |
| CSS (own stylesheets) | All the design; one CSS file per part of the site |
| localStorage | Keeps the cart in the browser |
| GitHub Pages | Hosts the live website |

## How to run it on your computer

You need [Node.js](https://nodejs.org) installed.

```bash
npm install        # download the libraries (only the first time)
npm run dev        # start the site
```

Then open the link shown in the terminal (http://localhost:5173/online-bookstore/).

## How to publish it

```bash
npm run deploy
```

This builds the site into the `dist` folder and uploads it to the `gh-pages` branch, which GitHub Pages shows online.

## Project structure

```
public/
  covers/               book cover pictures (1.jpg ... 12.jpg, same number as the book id)
src/
  assets/               background picture
  components/           reusable parts
    Navbar.jsx          top menu with cart counter and mobile menu button
    Footer.jsx          bottom of every page
    LibraryBackground.jsx  fixed library picture behind the site
    Page.jsx            wraps each page (title, spacing, scroll to top)
    BookCard.jsx        small card for one book
    BookCover.jsx       book picture, or a coloured cover if the picture is missing
  context/
    CartContext.jsx     the shopping cart shared by the whole site (useContext + localStorage)
  data/
    books.js            the list of books and categories
  pages/                one file per page
    Home.jsx, Books.jsx, BookDetails.jsx, Cart.jsx,
    Features.jsx, About.jsx, Contact.jsx, NotFound.jsx
  styles/               CSS files (App.css holds colours, buttons and shared styles)
  App.jsx               all the routes of the site
  main.jsx              starting point: router + cart provider
index.html              the single HTML page React runs in
vite.config.js          Vite settings (base path for GitHub Pages)
```

## How it works (short)

1. `main.jsx` starts React inside `index.html`, wrapped in `BrowserRouter` (pages) and `CartProvider` (cart).
2. `App.jsx` shows the Navbar and Footer on every page and picks the page to show from the link. A route is created for every book and every category with `map`.
3. Book data comes from `data/books.js`. Pages use `filter`, `sort` and `map` on this list.
4. The cart lives in `CartContext.jsx`. Any component can read it or change it with `useCart()`. A `useEffect` saves it to localStorage each time it changes.
5. Forms use `useState` for the values, one `handleChange` for all fields, and a `validate` function before submitting.

## Notes

- This is a front-end demo: no real payment is taken and the contact form does not send emails.
- Book descriptions were written for this project.
- Images: the background photo and the book cover pictures were collected from the internet for educational use only (see the project report for sources).

## Author

[Your name] – Lebanese International University – CSCI426
