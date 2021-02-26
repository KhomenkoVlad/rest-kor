const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = function (env) {
  let production = !env || env.NODE_ENV === 'production';
  const config = {
    mode: production ? 'production' : 'development',
    entry: ['./src/index.jsx', './src/style.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      disableHostCheck: true,
      historyApiFallback: {
        index: '/index.html'
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[hash][ext]'
          },
        },
        {
          test: /\.s[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(json)$/,
          type: "javascript/auto",
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[folder]/[name].[ext]",
                outputPath: "assets/locales/"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      //new CleanWebpackPlugin(),
      new CopyPlugin(
        {
          patterns: [
            {
              toType: 'dir',
              context: __dirname + '/src/assets',
              from: 'locales/**',
              to: __dirname + '/dist'
            },
          ]
        }),
    ],
  };
  return config;
}