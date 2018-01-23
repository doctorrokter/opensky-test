'use strict';

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app/main.js',

    output: {
        filename: '../resources/public/js/main.js'
    },

    target: 'web',

    stats: {
        colors: true,
        reasons: true,
        hash: true,
        version: true,
        timings: true,
        chunks: true,
        chunkModules: true,
        cached: true,
        cachedAssets: true
    },

    devServer: {
        port: 3000,
        hot: true,
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.js$/, exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new UglifyJsPlugin()
    ]
};