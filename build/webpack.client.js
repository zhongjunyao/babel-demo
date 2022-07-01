
const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')

module.exports = (unused, argv)=>{
  return webpackMerge(webpackBase, {
    mode: 'development',
    entry: [path.resolve(__dirname, '../src/index.js')],
    output: {
      filename: '[name].js',
      path: path.join(__dirname, '..', 'dist/public')
    }
  })
}