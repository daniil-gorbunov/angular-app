const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(`${__dirname}/../src/app.js`),
    output: {
        path: path.resolve(`${__dirname}/../build`),
        filename: 'static/js/[name].js',
        publicPath: '/'
    },

    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        historyApiFallback: true
    },
    watch: true,

    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader!css-loader')
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};
