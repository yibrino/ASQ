/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: {
          caribbeangreen: "#FFFFFF",
        },
        primary: {
          green: "#4AA350",
          orange: "#D76738",
        },
      },
    },
  },
  plugins: [],
};
