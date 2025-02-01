const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: './src/index.js', // Entry file
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html' // Your HTML base
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // Clear dist on rebuild
  }
};