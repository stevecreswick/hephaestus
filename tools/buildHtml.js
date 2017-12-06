// Modules
const fs = require( 'fs' );
const cheerio = require( 'cheerio' );
const path = require( 'path' );
const colors = require( 'colors' );
const processLogger = require( './processLogger' );

// -------------------------------------------------------
// Paths
const appRoot = process.cwd();

// Source
// TODO: Dynamically Initialize Source Entry
const buildTemplate = path.join( appRoot, 'src', 'index.html' );

// Output
// TODO: Dynamically Define Output Path
const publicPath = path.join( appRoot, 'public' );
const publicHtml = path.join( publicPath, 'index.html' );

// -------------------------------------------------------
// Functions
const createDirectory = function( directory ) {
  if ( !fs.existsSync( directory ) ) {
    fs.mkdirSync(directory);
  }
};

const appendJavascript = function( markup ) {
  processLogger( 'Starting Process: appending Javascript to HTML', 'info' );
  console.log( ' markup ', markup );
  if ( markup ) {
    const $ = cheerio.load( markup );
    const bundleSrc = '/bundle.js';

    $( 'head' ).prepend( '' );
    $( 'body' ).append( '<script src="' + bundleSrc + '"></script>' );

    processLogger( 'Finished Process: Javascript Appended to HTML', 'success' );
    return $;
  }
};

const writeIndex = function( fileLocation, indexFile ) {
  processLogger( 'Starting Process: writing HTML to public', 'info' );
  if ( !indexFile ) {
    processLogger( 'Error: build template not found.', 'error' );
    return;
  }

  fs.writeFile( publicHtml, indexFile.html(), 'utf8', function (err) {
    if  (err ) {
      processLogger( err, 'error' );
    }

    processLogger( 'Finished Process: index.html written to Public Folder', 'success' );
  } );
};

// Exports
module.exports = function buildHtml() {
  fs.readFile( buildTemplate, 'utf8', (err, markup) => {
    if (err) {
      processLogger( err, 'error' );
    }

    createDirectory( publicPath );
    writeIndex( publicHtml, appendJavascript( markup ) );
  } );
}
