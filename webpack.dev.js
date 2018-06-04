const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const hmrPlugin = new webpack.HotModuleReplacementPlugin()

module.exports = merge(common, {
 mode: 'development',
 devtool: 'inline-source-map',
 devServer: {
   contentBase: './dist',
   hot: true,
   historyApiFallback: true
 },
 plugins: [
   hmrPlugin
 ]
});
