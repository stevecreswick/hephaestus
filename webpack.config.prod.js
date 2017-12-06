// webpack.config.prod.js
const path = require('path')
const webpack = require('webpack')
const loaders = require( './webpack.config.loaders' );
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
  devtool: 'source-map',

  entry: [
    './src/js/app'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  plugins: [
    extractSass,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    })
  ],

  module: {
    loaders: loaders
  }
}
