const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 8080,
        hot: true
    },
    entry: [
        `${require.resolve('webpack-dev-server/client')}?/`,
        require.resolve('webpack/hot/dev-server'),
        require.resolve('promise/lib/es6-extensions'),
        path.resolve(`${__dirname}/../src/app.js`),
    ],
    output: {
        path: path.resolve(`${__dirname}/../build`),
        filename: 'static/js/bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
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
