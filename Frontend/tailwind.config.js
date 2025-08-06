/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'rubik-mono': ['Rubik Mono One', 'monospace'],
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      dropShadow: {
        'text': '2px 2px 0px rgba(0, 0, 0, 1)',
        'text-lg': '3px 3px 0px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
} 