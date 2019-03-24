const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    stats: 'none',
    entry: [
        'react-hot-loader/patch',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: './public/scripts/js/app.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(s*)css$/,
                use: [
                     MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                query:{
                    outputPath: './public/img/',
                    name: '[name].[ext]?[hash]'
                }
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './public/css/app.bundle.css',
        })
    ],
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new TerserPlugin({
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ]
    }
};
