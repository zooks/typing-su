'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src/components/js/'),
  entry: {
    home: './main.js',
    emoji: './emoji.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js'),
    library: '[name]'
  },
  watch: true,
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      ClipboardJS: 'clipboard',
      Bootstrap: 'bootstrap',
    //   // Util: "exports-loader?Util!bootstrap/js/dist/util",
    }),
    // new UglifyJSPlugin()
  ],
  externals: {
    jquery: 'jQuery',
    bootstrap: 'Bootstrap',
    popper: 'popper.js',
    clipboard: 'ClipboardJS',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};