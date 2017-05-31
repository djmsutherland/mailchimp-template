const { resolve } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = environment => {
  return {
    entry: './index.js',
    output: {
      filename: 'index.js',
      path: resolve(__dirname, 'package')
    },
    context: resolve(__dirname, 'source'),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('index.css'),
    ]
  }
}
