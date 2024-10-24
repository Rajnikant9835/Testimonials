/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JS/JSX/TS/TSX files in the src directory
    "./public/index.html"  // Optionally, include your index.html if needed
  ],
  theme: {
    extend: {
      colors: {
        bgDark2: '#1E293B',  // Custom color example, modify as needed
      },
    },
  },
  plugins: [],
}
