const path = require('path');

const build = require( './tools/build' );
const buildHtml = require( './tools/buildHtml' );
const clean = require( './tools/clean' );

const publicDirectory = 'public';

const hephaestus = {
  build: function() {
    clean( publicDirectory );
    build();
    buildHtml();
  }
}

module.exports = hephaestus;
