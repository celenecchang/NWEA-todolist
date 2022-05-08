const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports={
  mode: 'development',
  //entry point of application
  entry: [
    './client/index.js',
  ], 

  //output of application
    // take all react components and bundle into single flie
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  }, 

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react',]
          },
        }
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './client/index.html',
    }),
  ]
}
