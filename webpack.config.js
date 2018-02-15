const webpack = require('webpack');
const configure = require('@dosomething/webpack-config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
