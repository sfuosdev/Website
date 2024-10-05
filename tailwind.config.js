/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#c084fc', /* Light purple */
          DEFAULT: '#a855f7', /* Medium purple */
          dark: '#7e22ce', /* Dark purple */
        },
        secondary: {
          light: '#7dd3fc', /* Light teal */
          DEFAULT: '#38bdf8', /* Medium teal */
          dark: '#0284c7', /* Dark teal */
        },
        background: {
          light: '#312e81', /* Slightly lighter purple for contrast */
          DEFAULT: '#1e1b4b', /* Dark purple background */
          dark: '#0f172a', /* Very dark purple, almost black */
        },
      },
    },
  },
  plugins: [],
}