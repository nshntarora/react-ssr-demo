const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    target: 'node',
    node: {
        __dirname: true,
    },
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.(scss|css)$/,
                loader: 'css-loader/locals'
            },
            {
                test: /\.(ttf|eot|otf|svg|png|jpg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader'
            }
        ]
    }
};