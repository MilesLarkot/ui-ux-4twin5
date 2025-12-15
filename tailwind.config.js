/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
     colors: {
        primary: "#0f172a",
        teal: {
          600: "#1D546C",  // Ta couleur exacte
          700: "#163d52",  // Hover un peu plus foncé
        },
      },
  },
  plugins: [],
}
}
