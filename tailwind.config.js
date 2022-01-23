module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06BDCB",
        accent: "#F5E632",
        gray: {
          900: "#1C2222",
          700: "#485253",
          400: "#9EA9AA",
          200: "#E8EFEF",
        },
      },
    },
  },
  plugins: [require("tailwindcss-dir")()],
  variants: {
    extend: {
      space: ["responsive", "direction"],
    },
  },
};
