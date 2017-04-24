const JSDOM = require('jsdom').JSDOM;

const dom = new JSDOM('');

global.window = dom.window;
global.document = window.document;

Object.keys(global.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = global.window[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
