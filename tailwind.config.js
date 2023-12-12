/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Asap: ["Asap", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
        NovaSquare: ['"Nova Square"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
