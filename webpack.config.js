var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var configure = require('@dosomething/webpack-config');
const path = require('path');

module.exports = configure({
    entry: {
        app: './js/app.js'
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/site/dist'),
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]
});