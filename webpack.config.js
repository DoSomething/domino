const path = require('path');
var webpack = require('webpack');
var configure = require('@dosomething/webpack-config');

module.exports = configure({
    entry: {
        app: './js/app.js'
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    }
});