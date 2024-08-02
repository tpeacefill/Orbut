

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        krona: ['Krona One', 'sans-serif'],
      },
      screens: {
        'lg-custom': '1250px',
      },
    },
  },
  plugins: [],
}
