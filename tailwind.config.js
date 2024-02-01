/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        amaticSC: ["Amatic SC", "sans-serif"],
        dancingScript: ["Dancing Script", "cursive"],
        exo2: ["Exo 2", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [],
};
