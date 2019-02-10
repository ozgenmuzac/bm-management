var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,

    // each entry point should be added here
    entry: {
        'main_app': './js/src/index.js',
    },

    // generates js bundles per each entry point
    output: {
        path: path.resolve('./js/bundles/'),
        filename: "[name]-[hash].js",
    },

    module: {
        rules: [
            // for transforming JSX to JS
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
            // for transforming less files to css.
            { test: /\.less?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader',
                            options: {
                                modules: true,
                                // generates hash for each class to make it available in local component
                                localIdentName: '[name]--[local]--[hash:base64:5]'
                            }
                        },
                        "less-loader",
                    ],
                }),
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin(Object.assign({
            // Using `[name]-[hash] for supporting multiple entry point`
            filename: "[name]-[hash].css"
        })),
    ],

    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx', '.less']
    },
};
