const colors = require( 'colors' );
const appName = 'Hephaestus';

colors.setTheme( {
  appTheme: [ 'red', 'bold', 'underline', 'dim' ],
  success: [ 'green', 'bold' ],
  input: 'grey',
  verbose: 'cyan',
  prompt: [ 'yellow', 'bold', 'dim' ],
  info: [ 'blue', 'italic' ],
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: [ 'red', 'bold' ]
} );

module.exports = function( message, theme ) {
  const seperator = '::>';
  const errorText = 'ERROR';

  if ( theme === 'error' ) {
    return console.log( errorText[ 'appTheme' ], seperator[ 'prompt' ], message[ theme ] )
  }
  else if ( theme ) {
    return console.log( appName[ 'appTheme' ], seperator[ 'prompt' ], message[ theme ] )
  }
  else {
    return console.log( appName[ 'appTheme' ], seperator[ 'prompt' ], message )
  }
};
