// Base Webpack configuration for building Stripes at the command line,
// including Stripes configuration.

const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    chunkFilename: 'chunk.[chunkhash].js',
    publicPath: '/'
  },
};
