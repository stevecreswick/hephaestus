const colors = require( 'colors' );
const appName = 'Hephaestus';

colors.setTheme( {
  appTheme: [ 'cyan', 'bold', 'italic' ],
  success: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: [ 'blue', 'italic' ],
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: [ 'red', 'underline', 'bold' ]
} );

module.exports = function( message, theme ) {
  if ( theme ) {
    return console.log( appName[ 'appTheme' ], message[ theme ] )
  }
  else {
    return console.log( appName[ 'appTheme' ], message )
  }
};
