const { tw } = require('./theme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: tw,
  },
  plugins: [],
}
