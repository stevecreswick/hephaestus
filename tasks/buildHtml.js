// Modules
const fs = require( 'fs' );
const cheerio = require( 'cheerio' );
const path = require( 'path' );
const processLogger = require( './../utils/processLogger' );

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
    fs.mkdirSync( directory );
  }
};

const appendJavascript = function( markup ) {
  processLogger( 'Build HTML: Appending Javascript to HTML', 'info' );

  if ( markup ) {
    const $ = cheerio.load( markup );
    const bundleSrc = '/bundle.js';

    $( 'head' ).prepend( '' );
    $( 'body' ).append( '<script src="' + bundleSrc + '"></script>' );

    processLogger( 'Build HTML: Javascript Appended to HTML', 'success' );
    return $;
  }
};

const writeIndex = function( fileLocation, indexFile ) {
  processLogger( 'Build HTML: Writing HTML to public', 'info' );

  if ( !indexFile ) {
    processLogger( 'Build HTML Error: Cannot write index.html. Template not found.', 'error' );
    return;
  }

  fs.writeFile( publicHtml, indexFile.html(), 'utf8', function ( error ) {
    if ( error ) {
      processLogger( error, 'error' );
    }

    processLogger( 'Build HTML: HTML written to Public Folder', 'success' );
  } );
};

// -------------------------------------------------------
// Exports
const buildHtml = function() {
  fs.readFile( buildTemplate, 'utf8', ( error, markup ) => {
    if ( error ) {
      processLogger( 'BUILD HTML Error: Cannot Find Build Template.', 'error' );
    }

    createDirectory( publicPath );
    writeIndex( publicHtml, appendJavascript( markup ) );
  } );
};

module.exports = buildHtml;
