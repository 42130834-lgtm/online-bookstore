export const books = [
  { id: 1, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Classic Fiction', year: '1813', price: 12.5, featured: true,
    colors: ['#7c2d12', '#9a3412'],
    description: 'Elizabeth Bennet and the proud Mr. Darcy clash over manners, money and first impressions in a witty story of love and class.' },
  { id: 2, title: 'Frankenstein', author: 'Mary Shelley', category: 'Gothic', year: '1818', price: 11.0, featured: true,
    colors: ['#14532d', '#064e3b'],
    description: 'A young scientist creates life and then abandons his creation, in a gothic tale about ambition, responsibility and loneliness.' },
  { id: 3, title: 'Moby-Dick', author: 'Herman Melville', category: 'Adventure', year: '1851', price: 14.9, featured: false,
    colors: ['#1e3a8a', '#172554'],
    description: 'Captain Ahab leads the crew of the Pequod on an obsessive hunt for the white whale that took his leg.' },
  { id: 4, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', category: 'Classic Fiction', year: '1890', price: 10.5, featured: true,
    colors: ['#581c87', '#3b0764'],
    description: 'A beautiful young man stays unchanged while his portrait absorbs the marks of his choices.' },
  { id: 5, title: 'Dracula', author: 'Bram Stoker', category: 'Gothic', year: '1897', price: 13.2, featured: false,
    colors: ['#7f1d1d', '#450a0a'],
    description: 'Told through letters and diary entries, a group of friends races to stop an ancient count from spreading his curse.' },
  { id: 6, title: "Alice's Adventures in Wonderland", author: 'Lewis Carroll', category: 'Children', year: '1865', price: 9.0, featured: true,
    colors: ['#0f766e', '#115e59'],
    description: 'Alice follows a white rabbit down a hole into a world where logic, size and time stop making sense.' },
  { id: 7, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', category: 'Mystery', year: '1892', price: 12.0, featured: false,
    colors: ['#374151', '#1f2937'],
    description: 'Twelve short cases in which the sharp-eyed detective and his friend Dr. Watson solve puzzles across Victorian London.' },
  { id: 8, title: 'The Art of War', author: 'Sun Tzu', category: 'Philosophy', year: 'c. 5th century BC', price: 8.5, featured: false,
    colors: ['#9a3412', '#7c2d12'],
    description: 'A short ancient treatise on strategy, preparation and judgement that is still read in business and leadership.' },
  { id: 9, title: 'Meditations', author: 'Marcus Aurelius', category: 'Philosophy', year: 'c. 180 AD', price: 9.5, featured: false,
    colors: ['#334155', '#0f172a'],
    description: 'Private notes of a Roman emperor on discipline, duty and keeping calm when life is hard.' },
  { id: 10, title: 'The Time Machine', author: 'H. G. Wells', category: 'Science Fiction', year: '1895', price: 8.9, featured: true,
    colors: ['#1d4ed8', '#1e3a8a'],
    description: 'An inventor travels to the distant future and finds humanity split into two very different peoples.' },
  { id: 11, title: 'Treasure Island', author: 'Robert Louis Stevenson', category: 'Adventure', year: '1883', price: 10.0, featured: false,
    colors: ['#b45309', '#78350f'],
    description: 'Young Jim Hawkins sails with pirates in search of buried treasure and learns who he can trust.' },
  { id: 12, title: 'Great Expectations', author: 'Charles Dickens', category: 'Classic Fiction', year: '1861', price: 13.5, featured: false,
    colors: ['#4c1d95', '#2e1065'],
    description: "Orphan Pip is lifted into a new life by a secret benefactor and has to face what he really values." },
]

export const categories = books
  .map((b) => b.category)
  .filter((c, i, list) => list.indexOf(c) === i)
  .sort((a, b) => a.localeCompare(b))

export const categorySlug = (category) => category.toLowerCase().split(' ').join('-')

// export const categories = [
// { name: 'Adventure', slug: 'adventure' },
// { name: 'Children', slug: 'children' },
// { name: 'Classic Fiction', slug: 'classic-fiction' },
// { name: 'Gothic', slug: 'gothic' },
// { name: 'Mystery', slug: 'mystery' },
// { name: 'Philosophy', slug: 'philosophy' },
// { name: 'Science Fiction', slug: 'science-fiction' }, ]
