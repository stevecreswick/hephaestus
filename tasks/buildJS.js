const webpack = require( 'webpack' );
const webpackConfig = require( '../webpack.config.prod' );
const processLogger = require( './../utils/processLogger' );

module.exports = function buildJS() {
  processLogger( 'Build JS: Generating minified bundle.js.', 'info' );

  webpack( webpackConfig ).run( ( error, stats ) => {
    if ( error ) { // so a fatal error occurred. Stop here.
      processLogger( 'BUILD JS: ' + error, 'error' )
      return 1;
    }

    var jsonStats = stats.toJson();

    if ( jsonStats.hasErrors ) {
      return jsonStats.errors.map( error => processLogger( 'BUILD JS: ' + error, 'error' ) );
    }

    if ( jsonStats.hasWarnings ) {
      processLogger( 'Build JS: Webpack generated the following warnings: ', 'error' );
      jsonStats.warnings.map( warning => processLogger( 'BUILD JS: ' + warning, 'warn' ) );
    }

    processLogger( 'Build JS: Webpack stats:', 'info' );
    processLogger( `${stats}`, 'data' )
    processLogger( 'Build JS: JS bundle written to Public.', 'success' );

    return 0;
  });
};
