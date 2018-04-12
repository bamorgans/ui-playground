const config = require('./webpack.config.js');
const webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
        },
        mangle: true,
        output: {
            comments: false
        },
        sourceMap: true,
        exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })
);


config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

module.exports = config;
