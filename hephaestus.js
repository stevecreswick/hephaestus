const buildEnv = require( './tasks/buildEnvironment' );
const buildJS = require( './tasks/buildJS' );
const buildHtml = require( './tasks/buildHtml' );
const clean = require( './tasks/clean' );

const publicDirectory = 'public';

const hephaestus = {
  build: function( environment ) {
    buildEnv( environment );
    clean( publicDirectory );
    buildJS();
    buildHtml();
  }
};

hephaestus.build( 'production' );

module.exports = hephaestus;
