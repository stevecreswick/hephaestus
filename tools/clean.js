const fs = require('fs-extra');
const path = require('path');
const appRoot = process.cwd();

const removeDirectory = function( directoryPath ) {
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
  }
};

module.exports = removeDirectory;
