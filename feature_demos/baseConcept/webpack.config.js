const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

let config = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),   //输出目录
    filename: 'bundle.js'                    //输出文件名
  },
  module: {
    rules: [                                 //loader
        {test: /\.jsx$/, use: 'loader-name'}
    ]
  },
  plugins: [                                 //plugins
    new HtmlWebpackPlugin({template: './index.html'}),
	new webpack.optimize.UglifyJsPlugin()
  ],
  mode: 'development'                        //mode
};

module.exports = config;