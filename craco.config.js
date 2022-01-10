const CracoLessPlugin = require('craco-less');
const { antd } = require('./theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antd,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
