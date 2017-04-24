const path = require('path');

const root = path.resolve(__dirname, '../');

const webpackConfig = {

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
  }
};

module.exports = webpackConfig;
