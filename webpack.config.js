const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.css']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    compress: true,
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\ .js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
