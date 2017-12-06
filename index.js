var path = require('path');

var buildHtml = require( './tools/buildHtml' );
var build = require( './tools/build' );

//
// "build": "babel-node tools/build.js",
// "clean-public": "npm run remove-public && mkdir public",
// "remove-public": "node_modules/.bin/rimraf ./public",
// "build:html": "babel-node tools/buildHtml.js",
// "prebuild": "npm-run-all clean-public build:html"

module.exports = {
  build: function() {
    console.log('H: Running Build');
    build();
  },

  buildHtml: function() {
    console.log('H: Running Build HTML');
    buildHtml();
  }
};
