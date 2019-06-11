const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader', 
              'postcss-loader'
            ]
          },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        // {
        //     test: /\.styl(us)$/,
        //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
        // },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../static'),
      verbose: true,
      dry: false
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }) 
  ]
});
