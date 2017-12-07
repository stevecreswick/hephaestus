const buildEnv = require( './tasks/buildEnvironment' );
const buildJS = require( './tasks/buildJS' );
const buildHtml = require( './tasks/buildHtml' );
const clean = require( './tasks/clean' );
const processLogger = require( './utils/processLogger' );

const publicDirectory = 'public';

const hephaestus = {
  loaders: function() {
    return require( './webpack.config.loaders' )
  },

  test: function() {
    const _this = this;
    var loaders = this.loaders();
    console.log(this.loaders());
    processLogger( 'Testing Loaders Function: ', 'info' );
    processLogger( loaders, 'data' );
  },

  build: function( environment ) {
    buildEnv( environment );
    clean( publicDirectory );
    buildJS();
    buildHtml();
  }
};

hephaestus.test();

module.exports = hephaestus;
