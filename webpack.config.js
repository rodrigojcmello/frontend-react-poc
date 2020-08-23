const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = (env = { NODE_ENV: '' }) => {
  const prod = env.NODE_ENV !== 'development';

  const config = {
    entry: './src/routes/index.tsx',
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, './dist'),
    },
    mode: prod ? 'production' : 'development',
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
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
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-modules-typescript-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: prod ? '[hash:base64:5]' : '[local]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () =>
                  prod
                    ? [tailwindcss(), autoprefixer(), cssnano()]
                    : [tailwindcss()],
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };
  if (prod) {
    config.plugins.push(new CleanWebpackPlugin());
  } else {
    config.devtool = 'source-map';
    config.devServer = { historyApiFallback: true };
    config.plugins.push(new webpack.ProgressPlugin());
  }
  return config;
};
