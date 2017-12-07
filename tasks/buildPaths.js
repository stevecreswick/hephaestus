const path = require('path');
const appRoot = process.cwd();

module.exports = {
  'DIST': path.resolve( appRoot, 'dist' ),
  'SRC': path.resolve( appRoot, 'src' ),
  'JS': path.resolve( appRoot, 'src/js' ),
}
