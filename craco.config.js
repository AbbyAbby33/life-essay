const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#e03868',
              '@layout-header-background': '#e3a8b9',
              // '@heading-color': '#e3a8b9'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};