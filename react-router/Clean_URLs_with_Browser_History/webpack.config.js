/**
 * Created by Lam on 16/9/30.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool : 'source-map',
    content : process.cwd(),
    entry : {
        'index' : "./src/js/index.js",
    },
    output : {
        path: "./dist",//打包后的文件存放的地方
        filename : "js/[name]-build.js",//打包后输出文件的文件名
    },

    babel: {
        cacheDirectory: require('os').tmpdir()//缓存
    },

    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },


    devServer : {
        contentBase : "",//本地服务器所加载的页面所在的目录
        port : 9988,
        colors : true,//终端中输出结果为彩色
        historyApiFallback : true,//不跳转
        inline : true//实时刷新
    }

};