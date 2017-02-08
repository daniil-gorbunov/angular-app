const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        port: 8080,
    },
    entry: {
        commons: [
            `${require.resolve('webpack-dev-server/client')}?/`,
            require.resolve('webpack/hot/dev-server'),
            require.resolve('promise/lib/es6-extensions'),
            path.resolve(`${__dirname}/../src/app.js`),
        ],
        test: path.resolve(`${__dirname}/../test/index.js`),
    },
    output: {
        path: path.resolve(`${__dirname}/../build`),
        filename: 'static/js/[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
            },
            {
                exclude: [
                    /\.html$/,
                    /\.js$/,
                    /\.css$/,
                    /\.json$/,
                    /\.svg$/,
                    /\/$/,
                ],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.pug$/,
                use: [
                    'pug-loader',
                ],
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][name].[ext]?[hash]',
                            limit: 4096,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['commons', 'test'],
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(`${__dirname}/../src/index.html`),
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            },
        }),
    ],
};
