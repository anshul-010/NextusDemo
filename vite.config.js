import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables Jest-like globals like `describe`, `it`, etc.
    environment: 'jsdom', // For testing DOM-related code
    setupFiles: './setupTests.js', // For custom setup (e.g., mocking APIs)
  },
})
