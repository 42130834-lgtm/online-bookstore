import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site lives at https://42130834-lgtm.github.io/online-bookstore/
// so every file is served from /online-bookstore/
export default defineConfig({
  plugins: [react()],
  base: '/online-bookstore/',
})
