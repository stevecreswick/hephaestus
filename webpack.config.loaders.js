const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = [

  // We are telling webpack to use "babel-loader" for .js and .jsx files
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },

  // CSS loader to CSS files -> ADDED IN THIS STEP
  // Files will get handled by css loader and then passed to the extract text plugin
  // which will write it to the file we defined above
  {
    test: /\.scss$/,

    use: extractSass.extract({
        use: [{
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
    })

    // TODO: Old Two Untested
    // use: [
    //   {
    //     loader: ExtractTextPlugin.extract({
    //       use: "style-loader" // creates style nodes from JS strings
    //     }),
    //     loader: ExtractTextPlugin.extract({
    //       use: "css-loader" // translates CSS into CommonJS
    //     }),
    //     loader: ExtractTextPlugin.extract({
    //       use: "sass-loader" // compiles Sass to CSS
    //     }),
    //   }
    // ]

    // TODO: Old One
    // loader: ExtractTextPlugin.extract({
    //   use: "css-loader"
    // }),
  },

  // File loader for image assets -> ADDED IN THIS STEP
 // We'll add only image extensions, but you can things like svgs, fonts and videos


  {
    test: /\.(png|jpg|gif)$/,
    use: [
      'file-loader',
    ],
  },
]
