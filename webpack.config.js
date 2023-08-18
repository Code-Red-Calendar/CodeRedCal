const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/src/App.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          // 'postcss-loader',
          // 'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'client/index.html'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api': ''},
      }
    }
  }
};