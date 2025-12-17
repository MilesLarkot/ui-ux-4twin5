/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.css",
    "./src/sass/**/*.scss",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a3d64",
        secondary: "#0c2b4e",
        accent: "#1d546c",
        neutrallight: "#f4f4f4",
        neutraldark: "#454545",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
