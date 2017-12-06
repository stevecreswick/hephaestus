/*eslint-disable no-console */
var webpack = require( 'webpack' );
var webpackConfig = require( '../webpack.config.prod' );
var colors = require( 'colors' );
const processLogger = require( './processLogger' );

module.exports = function buildApp() {
  process.env.NODE_ENV = 'production';
  processLogger( 'Starting Process: generating minified bundle for production', 'info' );

  webpack(webpackConfig).run((err, stats) => {
    if (err) { // so a fatal error occurred. Stop here.
      console.log(err.bold.red);
      return 1;
    }

    var jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
      return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
      processLogger( 'Webpack generated the following warnings: ', 'error' );
      jsonStats.warnings.map( warning => processLogger( warning, 'warn' ) );
    }

    processLogger( `Webpack stats: ${stats}` );
    processLogger( 'Your app has been compiled in production mode and written to Public.', 'success' );

    return 0;
  });
};
