const path = require('path');

const webpackBaseConfig = require('./webpack.base');

const webpackConfig = Object.assign({}, webpackBaseConfig, {
  devtool: 'inline-source-map',
  target: 'node',
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
});

module.exports = webpackConfig;
