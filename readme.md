# Hephaestus for Webpack

## Description
Hephaestus is a build tool for Webpack to hopefully speed up my personal development
process for React/Webpack-Based front-end projects.

## Dependencies
The application will need to install the following dependencies.
```
// Webpack
  webpack
  webpack-dev-server

// HTML Loader
  html-webpack-plugin

// Loaders
  babel-loader
  file-loader
  css-loader
  style-loader
  sass-loader
  node-sass
```
## NPM scripts
```
{
  "dev": "webpack-dev-server",
  "start": "node server.js"
}
```

## Hephaestus Usage

`npm install hephaestus-webpack`

## File Structure
```
root
server.js
  - public // production build
  - dist // development.bundle.js
  - src // source code
    index.html
    - assets
    - css
      application.scss
    - js
      application.js // entry point
```

## Development

#### webpack.config.js

```
const path = require('path');
const webpack = require('webpack');

// Loaders
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const hephaestus = require( 'hephaestus-webpack' );
const loaders = hephaestus.loaders();

// Paths
const paths = hephaestus.paths();

// Config
module.exports = {
  entry: path.join( paths.JS, 'application.js' ),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },

  plugins: [
    extractSass,
    new HtmlWebpackPlugin( {
      template: path.join( paths.SRC, 'index.html' ),
    } ),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: loaders
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
  },

  devServer: {
    hot: true
  }
};

```


### Production
#### server.js
```
var express = require('express');
var path = require( 'path' );
var app = express();

// ------
// Install Hephaestus

var hephaestus = require( 'hephaestus-webpack' );
hephaestus.build( 'production' );

// ------

var publicPath = path.join( __dirname, 'public' );
var indexPath  = path.join( publicPath, 'index.html' );

// Config
app.use( express.static( publicPath, { redirect : false } ) );
app.set( 'view engine', 'html' );
app.use( function( request, response, next ) {
  response.set( 'Access-Control-Allow-Origin', '*' );
  response.set( 'Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' );
  response.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );

  next();
} );

// Routing
app.get( '/', function(request, response) {
  response.set( 'Cache-Control', 'no-cache' );

  response.sendFile( indexPath );
} );

app.listen( process.env.PORT || 8080 );

```
