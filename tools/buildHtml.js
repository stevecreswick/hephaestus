var fs = require( 'fs' );
var cheerio = require( 'cheerio' );
var colors = require( 'colors' );
var path = require( 'path' );
var htmlSource = path.join( appRoot, 'src', 'index.html' );

module.exports = function buildHtml() {
  fs.readFile( htmlSource, 'utf8', (err, markup) => {
    if (err) {
      return console.log(err);
    }

    var $ = cheerio.load(markup);
    var bundleSrc = '/bundle.js';

    $('head').prepend('');
    $('body').append( '<script src="' + bundleSrc + '"></script>' );

    fs.writeFile('public/index.html', $.html(), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('index.html written to /public'.green);
    });
  });
}
