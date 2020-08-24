const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tailwindcss = require('tailwindcss');

module.exports = (env = { NODE_ENV: '' }) => {
  const prod = env.NODE_ENV !== 'development';

  const postcssPlugins = () => [tailwindcss(), autoprefixer()];

  return {
    entry: './src/routes/index.tsx',
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'build'),
    },
    mode: prod ? 'production' : 'development',
    ...(prod ? { devtool: 'source-map' } : {}),
    devServer: !prod ? { historyApiFallback: true } : {},
    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
      new MiniCssExtractPlugin(),
      prod ? new CleanWebpackPlugin() : new webpack.ProgressPlugin(),
    ],
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
          test: /\.module.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
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
                ident: 'postcss',
                plugins: postcssPlugins,
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /^((?!\.module).)*s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: postcssPlugins,
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };
};
