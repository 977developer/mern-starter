var path = require('path');
var webpack = require('webpack');
var server = require("webpack-dev-server");

module.exports = {
    entry: './client/index.js',
    output: {
        path : path.join(__dirname, 'client'),
        filename:"bundle.js"
    },
    module: {
        loaders:[{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude:'/node_modules/',
            query:{
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
      contentBase: path.join(__dirname, 'client'),
      compress: true,
      port: 9000
    }
}
