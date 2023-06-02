/* eslint-disable strict */
const {resolve} = require('./utils');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getReactPath = name =>
  resolve(`../build/node_modules/${name}/umd/${name}.development.js`);

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: resolve('dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                [
                  '@babel/preset-typescript',
                  {
                    isTSX: true,
                    allExtensions: true,
                  },
                ],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      react: getReactPath('react'),
      'react-dom': getReactPath('react-dom'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
  ],
};
