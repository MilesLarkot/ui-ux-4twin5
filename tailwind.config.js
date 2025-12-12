/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1A3D64",
        secondary: "#0C2B4E",
        accent: "#1D546C",
        neutrallight: "#F4F4F4",
        neutraldark: "#454545",
      },
    },
  },
  plugins: [],
};
