const path = require('path')
const webpack = require('webpack')

module.exports = {
  cache: true,
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          babelrc: true
        }
      }
    ]
  }
}