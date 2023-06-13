/* eslint-disable strict */
const {resolve} = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getReactPath = name =>
  resolve(`../build/node_modules/${name}/umd/${name}.development.js`);

module.exports = {
  mode: 'development',
  entry: resolve('src/main.ts'),
  output: {
    path: resolve('dist'),
    clean: true,
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
                [
                  '@babel/preset-react',
                  {
                      // runtime: 'automatic',
                      development: true
                  },
              ],
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
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    compress: true,
    port: 9000,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    open: false,
    hot: false,
    liveReload: false,
  },
};
