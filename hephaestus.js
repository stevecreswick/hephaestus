const buildEnv = require( './tasks/buildEnvironment' );
const buildJS = require( './tasks/buildJS' );
const buildHtml = require( './tasks/buildHtml' );
const buildPaths = require( './tasks/buildPaths' );
const clean = require( './tasks/clean' );
const processLogger = require( './utils/processLogger' );

const publicDirectory = 'public';
const appRoot = process.cwd();

const hephaestus = {
  paths: function() {
    return buildPaths();
  },

  loaders: function() {
    return require( './webpack.config.loaders' )
  },

  build: function( environment ) {
    buildEnv( environment );
    clean( publicDirectory );
    buildJS();
    buildHtml();
  }
};

module.exports = hephaestus;
