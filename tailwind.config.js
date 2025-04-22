/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        code: ["Fira Code", "monospace"],
      },
      colors: {
        backgroundDark: "#0A0A0A",
        backgroundLight: "#F4F4F4",
        textDark: "#EAEAEA",
        textLight: "#222222",
        accent: "#7A7A7A",
        highlight: "#949494",
      },
    },
  },

  plugins: [],
};
