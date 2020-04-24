const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 3000,
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new HtmlWebpackPlugin()],
};
