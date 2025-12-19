/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  content: ["./public/**/*.html", "./src/**/*.css", "./src/sass/**/*.scss"],
  theme: {
    extend: {
      colors: {
        primary: "#1A3D64",
        secondary: "#0C2B4E",
        accent: "#1D546C",
        neutrallight: "#F4F4F4",
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
