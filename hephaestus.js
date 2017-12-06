var path = require('path');

var buildHtml = require( './tools/buildHtml' );
var build = require( './tools/build' );
var clean = require( './tools/clean' );
const directory = 'public';

const hephaestus = {
  build: function() {
    console.log('H: Cleaning Public Folder');
    clean( directory );
    console.log('H: Running Build');
    build();
    console.log('H: Running Build HTML');
    buildHtml();
  }
}

module.exports = hephaestus;
