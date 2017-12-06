var fs = require( 'fs' );
var cheerio = require( 'cheerio' );
var colors = require( 'colors' );
var path = require( 'path' );
const appRoot = process.cwd();
var htmlSource = path.join( appRoot, 'src', 'index.html' );
var publicHtml = path.join( appRoot, 'public', 'index.html' );

module.exports = function buildHtml() {
  fs.readFile( htmlSource, 'utf8', (err, markup) => {
    if (err) {
      return console.log(err);
    }

    console.log( 'MARKUP ', markup );
    var $ = cheerio.load( markup );
    var bundleSrc = '/bundle.js';

    $('head').prepend('');
    $('body').append( '<script src="' + bundleSrc + '"></script>' );

    fs.writeFile( publicHtml, $.html(), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('index.html written to /public'.green);
    });
  } );
}
