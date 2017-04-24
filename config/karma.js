const path = require('path');
const root = path.resolve(__dirname, '..');
const webpackTestConfig = require('./webpack.test');

module.exports = function(config) {
  config.set({
    basePath: root,
    frameworks: [ 'jasmine' ],
    files: [
      'src/**/*.spec.jsx'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.jsx': ['webpack', 'sourcemap'],
      'src/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: webpackTestConfig,

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-mocha-reporter'
    ],

    reporters: [ 'mocha' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: [
      'Chrome',
      // 'ChromeCanary',
      // 'Firefox'
    ],
    singleRun: true
  });
};
