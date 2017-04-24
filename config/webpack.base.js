const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, '../');

const webpackConfig = {
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

  // options for resolving module requests
  // (does not apply to resolving to loaders)
  resolve: {
    // extensions that are used
    extensions: [ '.jsx', '.js' ]
  },

  // configuration regarding modules
  module: {
    // rules for modules (configure loaders, parser options, etc.)
    rules: [
      {
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include
        test: /\.jsx?/,
        include: path.resolve(root, 'src'),

        // the loader which should be applied, it'll be resolved relative to the context
        loader: 'babel-loader',

        // options for the loader
        options: {
          presets: [
            'es2015',  // https://babeljs.io/docs/plugins/preset-es2015/
            'react'    // https://babeljs.io/docs/plugins/preset-react/
          ]
        }
      },
      {
        test: /\.css/,
        include: path.resolve(root, 'src'),
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
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
};

module.exports = webpackConfig;
