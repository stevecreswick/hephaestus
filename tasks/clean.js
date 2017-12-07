const fs = require('fs-extra');
const path = require('path');
const appRoot = process.cwd();
const processLogger = require( './../utils/processLogger' );

const removeDirectory = function( directoryPath ) {
  processLogger( 'Clean: Wiping Public Folder.', 'info' );

  try { var files = fs.readdirSync( directoryPath ); }
  catch( e ) { return; }
  if ( files.length > 0 ) {
    for ( var i = 0; i < files.length; i++ ) {
      var filePath = path.join( appRoot, directoryPath, files[ i ] );

      fs.statSync( filePath ).isFile() ?
        fs.unlinkSync( filePath ) :
        removeDirectory( filePath );
    }

    fs.rmdirSync( directoryPath );
    processLogger( 'Clean: Removed Public Folder.', 'success' );
  }
};

module.exports = removeDirectory;
