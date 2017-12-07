const colors = require( 'colors' );
const appName = 'Hephaestus';

colors.setTheme( {
  appTheme: [ 'red', 'bold', 'underline', 'dim' ],
  success: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: [ 'yellow', 'bold', 'dim' ],
  info: [ 'blue', 'italic' ],
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: [ 'red', 'underline', 'bold' ]
} );

module.exports = function( message, theme ) {
  const seperator = '::>';

  if ( theme ) {
    return console.log( appName[ 'appTheme' ], seperator[ 'prompt' ], message[ theme ] )
  }
  else {
    return console.log( appName[ 'appTheme' ], seperator[ 'prompt' ], message )
  }
};
