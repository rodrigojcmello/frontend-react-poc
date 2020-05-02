const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/routes/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  devServer: { historyApiFallback: true },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.([tj])sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'last 1 chrome version' }],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};
