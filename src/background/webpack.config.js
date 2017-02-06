/**
 * Created by vlad.chirkov on 31.1.17.
 */
var path = require('path');

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
                loader: 'json-loader',
            }
        ]
    },
    devtool: 'source-map'
};