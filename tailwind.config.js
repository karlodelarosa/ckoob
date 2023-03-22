/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom-checkbox': '3px',
        'custom-button': '4px',
        'custom-input': '4px',
        'call-out': '40px',
      },
    },
  },
  plugins: [],
}
