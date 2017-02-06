/**
 * Created by vlad.chirkov on 31.1.17.
 */
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /(\.html|\.svg)$/,
                loader: 'ngtemplate!html'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /angular(\.min)?\.js$/,
                loader: "imports?$=jquery"
            },
            {
                test: /jquery(\.min)?\.js$/,
                loader: 'expose?jQuery'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'index.html'
            }
        ])
    ],
    devtool: 'source-map'
};