var path = require('path');

module.exports = {
  'entry': "./demo/index.js",
  'output': {
    'path': './demo',
    'filename': "webpack-bundle.js"
  },
  module: {
    loaders : [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules|server/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'url?limit=10000!img?progressive=true' 
      }
    ]
  },
  'devServer': { inline: true }
}