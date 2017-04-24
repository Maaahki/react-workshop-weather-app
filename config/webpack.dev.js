const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base');

const root = path.resolve(__dirname, '../');

const webpackConfig = Object.assign({}, webpackBaseConfig, {
  // Here the application starts executing
  // and webpack starts bundling
  entry: './src/index',

  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  devtool: 'source-map',

  // options related to how webpack emits results
  output: {
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    path: path.resolve(root, 'build'),

    // the filename template for entry chunks
    filename: 'bundle.js'
  },

  // list of additional plugins
  plugins: [
    // uses a template html page to inject scripts after they have been
    // bundeled.
    // see: https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'public', 'index.html')
    })
  ]
});

module.exports = webpackConfig;
