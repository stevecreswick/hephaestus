const processLogger = require( './../utils/processLogger' );

const buildEnvironment = function( environment ) {
  processLogger( 'Setting environment to ' + environment + '.', 'info' );
  switch ( environment ) {
    case 'production':
      process.env.NODE_ENV = 'production';
      processLogger( 'Using PRODUCTION environment.', 'success' );
      break;
    default:
      process.env.NODE_ENV = 'development';
      processLogger( 'Using DEVELOPMENT environment.', 'success' );
  }
};

module.exports = buildEnvironment;
