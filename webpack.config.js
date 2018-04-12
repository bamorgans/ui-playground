const webpack = require('webpack');
const path = require('path');


const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_SRC = path.resolve(__dirname, 'src');
const APP_LIB = path.resolve(__dirname, 'lib');
module.exports = {
    entry: [
        path.join(APP_SRC, 'index.js')
    ],
    module: {
        rules: [
              // First, run the linter.
            // It's important to do this before Babel processes the JS.
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: APP_SRC,
            },
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
                query: {
                    cacheDirectory: true,
                },

            },
            { test: /\.s?css$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.scss']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: './index.html',
        })
    ]
};
