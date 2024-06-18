const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        libraryTarget: 'system',
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
        path: path.resolve(__dirname, 'build'),
        devtoolNamespace: 'react-app',
        // замінено властивість jsonpFunction на chunkLoadingGlobal
        chunkLoadingGlobal: 'webpackJsonpreact-app',
      };

      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        splitChunks: false,
      };

      webpackConfig.externals = ['react', 'react-dom', 'single-spa'];

      return webpackConfig;
    },
  },
};

