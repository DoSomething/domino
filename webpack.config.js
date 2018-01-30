var webpack = require('webpack');
var configure = require('@dosomething/webpack-config');
const path = require('path');

module.exports = configure({
    entry: {
        app: './js/app.js'
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    }
});