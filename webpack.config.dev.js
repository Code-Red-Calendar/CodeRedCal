const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack-dev-server/client?http://localhost:8080',
    
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        'webpack/hot/only-dev-server',
    
        // entry point of our app
    './client/src/App.tsx',
  ],
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
      template: './client/index.html'
    }),
  ],
  devServer: {
    // Required for Docker to work with dev server
    host: '0.0.0.0',
    port: 8080,
    //enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api': 'http://api:5000',
    },
  },
  // watchOptions: {
  //   aggregateTimeout: 500, // delay before reloading
  //   poll: 1000 // enable polling since fsevents are not supported in docker
  // }
};