const { tw } = require('./theme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: tw,
  },
  plugins: [
    require('tailwindcss-dir')(),
  ],
  variants: {
    extend: {
      space: ['responsive', 'direction'],
    }
  },
}
