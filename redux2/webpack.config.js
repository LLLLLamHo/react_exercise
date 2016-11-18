/**
 * Created by Lam on 16/11/15.
 */
/**
 * Created by Lam on 16/9/30.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool: 'source-map',
    content: process.cwd(),
    entry: {
        'index': "./src/js/index.js",//逻辑js和组件
        vendors: ['react','react-dom']//第三方库
    },
    output: {
        path: "./dist",//打包后的文件存放的地方
        publicPath: '..',
        filename: "js/[name]-build.js",//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','stage-0', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: "url-loader?limit=5000&name=/images/[name]-[hash:8].[ext]"
            },
        ]
    },


    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],

    plugins: [
        new ExtractTextPlugin(path.join('css', '[name].css'), {//抽出css
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')//打包分离
        // new HtmlWebpackPlugin({
        //     filename : '../../index-dev.html',
        //     template : '../index.html',
        //     inject : 'body',
        //     chunks : '["index"]'
        // })

    ],

    devServer: {
        // contentBase: "/",//本地服务器所加载的页面所在的目录
        port: 9988,
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
    }
};
module.exports = config;