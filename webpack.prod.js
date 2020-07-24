const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: '[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js',
    // `path` is the folder where Webpack will place your bundles
    path: path.resolve(__dirname, './dist'),
    // `publicPath` is where Webpack will load your bundles from (optional)
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
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
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '#': path.resolve(__dirname, 'src/components/'),
      '#Custom': path.resolve(__dirname, 'src/components/Custom/'),
      '#Icon': path.resolve(__dirname, 'src/components/Custom/Icon/'),
      '@Hooks': path.resolve(__dirname, 'src/hooks/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Styles': path.resolve(__dirname, 'src/styles/'),
      '@Utils': path.resolve(__dirname, 'src/utils/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env.production')
    })
  ]
};
