/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: "Pixelify Sans",
      },
      colors: {
        pixel: {
          white: "#ffffff",
          yellow: "#faab19",
          orange: "#f58f1e",
          teal: "#0fa29e",
          "dark-teal": "#14888d",
          blue: "#026e95",
        },
      },
    },
  },
  plugins: [],
};
