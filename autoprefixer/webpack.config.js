/**
 * Created by chengyong.lin on 16/12/11.
 */
var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/scripts/test.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css!postcss' // Run both loaders
            },
        ]
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
