// webpack.dev.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/',
    open: true
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: ['url-loader']
      },
      {
        test: /\.ts(x)?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: ['/stories']
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'], // WDS가 serve하는 파일은 javascript
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '#': path.resolve(__dirname, 'src/components/'),
      '#Custom': path.resolve(__dirname, 'src/components/Custom/'),
      '#Icon': path.resolve(__dirname, 'src/components/Custom/Icon/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Styles': path.resolve(__dirname, 'src/styles/'),
      '@Utils': path.resolve(__dirname, 'src/utils/')
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env.development')
    })
  ]
};
