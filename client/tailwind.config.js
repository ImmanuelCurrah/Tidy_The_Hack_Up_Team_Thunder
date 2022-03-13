module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add emerald-1000 as near-black color
        emerald: {
          1000: '#010E0A',
        }
      },
      // Font import
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      // Enables active selector bg change
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
