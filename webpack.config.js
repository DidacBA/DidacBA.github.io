const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './react-app/index.js',
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, './assets/js'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      'NODE_ENV': 'production'
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}