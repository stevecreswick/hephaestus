const path = require('path');
const appRoot = process.cwd();

module.exports = function() {
  return {
    'DIST': path.resolve( appRoot, 'dist' ), // development.bundle
    'SRC': path.resolve( appRoot, 'src' ), // source
    'JS': path.resolve( appRoot, 'src/js' ) // entry
  }
}
