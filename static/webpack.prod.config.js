var BundleTracker = require('webpack-bundle-tracker');
var config = require('./webpack.base.config.js');

config.plugins = config.plugins.concat([
    new BundleTracker({filename: './webpack-stats-prod.json'}),
]);

config.optimization = {
    nodeEnv: 'production',
};

config.mode = 'production';

module.exports = config;
