const webpack = require( 'webpack' );
const webpackConfig = require( '../webpack.config.prod' );
const processLogger = require( './../utils/processLogger' );

module.exports = function buildJS() {
  processLogger( 'Generating minified bundle.js.', 'info' );

  webpack( webpackConfig ).run( ( error, stats ) => {
    if ( error ) { // so a fatal error occurred. Stop here.
      processLogger( error, 'error' )
      return 1;
    }

    var jsonStats = stats.toJson();

    if ( jsonStats.hasErrors ) {
      return jsonStats.errors.map( error => processLogger( error, 'error' ) );
    }

    if ( jsonStats.hasWarnings ) {
      processLogger( 'Webpack generated the following warnings: ', 'error' );
      jsonStats.warnings.map( warning => processLogger( warning, 'warn' ) );
    }

    processLogger( `Webpack stats: ${stats}` );
    processLogger( 'JS bundle written to Public.', 'success' );

    return 0;
  });
};
