const fs = require('fs-extra');
const path = require('path');
const appRoot = process.cwd();


const removeDirectory = function( directoryPath ) {
  try { var files = fs.readdirSync( directoryPath ); }
  catch( e ) { return; }
  if ( files.length > 0 ) {
    for ( var i = 0; i < files.length; i++ ) {
      var filePath = path.join( appRoot, directoryPath, files[ i ] );
      // var filePath = directoryPath + '/' + files[ i ];

      fs.statSync( filePath ).isFile() ?
        fs.unlinkSync( filePath ) :
        removeDirectory( filePath );
    }

    fs.rmdirSync(directoryPath);
  }
};

module.exports = removeDirectory;

// rmDir = function(dirPath, removeSelf) {
//       if (removeSelf === undefined)
//         removeSelf = true;
//       try { var files = fs.readdirSync(dirPath); }
//       catch(e) { return; }
//       if (files.length > 0)
//         for (var i = 0; i < files.length; i++) {
//           var filePath = dirPath + '/' + files[i];
//           if (fs.statSync(filePath).isFile())
//             fs.unlinkSync(filePath);
//           else
//             rmDir(filePath);
//         }
//       if (removeSelf)
//         fs.rmdirSync(dirPath);
//     };

// fs.readdir(directory, (err, files) => {
//   if (err) throw err;
//
//   for (const file of files) {
//     fs.unlink(path.join( appRoot, directory, file), err => {
//       if (err) throw err;
//     });
//   }
// });
