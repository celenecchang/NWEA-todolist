const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:[
    './client/App.jsx'
  ],
output: {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: 'bundle.js'
},
devtool: 'eval-source-map',
mode: 'development',
devServer: {
  host: 'localhost',
  port: 8080,
  static:{
    directory: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  proxy:{
    '/api/**': {
      target: 'http://localhost:3000/',
      secure: false,
    },
    '/assets/**': {
      target: 'https://localhost: 3000/',
      secure: false,
    },
  },
 },
 modules: {
   rules: [
     {
       test: /.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader'
     },
    },
    {
      test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
    }
   ],
 },
 plugins:[
  new HtmlWebpackPlugin({
    template: './client/index.html',
  }),
 ]
};