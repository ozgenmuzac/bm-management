var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.base.config.js')

config.plugins = config.plugins.concat([
    new BundleTracker({filename: './webpack-stats-prod.json'}),

    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
]);

config.optimization = {
    minimize: false,
};

config.mode = 'production';

module.exports = config;
