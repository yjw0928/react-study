const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const { resolve } = require('path');


/**
 * @type {import('webpack').Configuration}
 */

const prodConfig = {
    mode: 'production',
    optimization: {
        // 允许webpack将代码分割成更小的块
        splitChunks: {
            // 只有大于3kb的才会被分割
            minSize: 3000,
            // 分割规则
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    // 规则优先级，越低优先级越高
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'common',
                    // 公共模块
                    // test: resolve('src/common'),
                    //表示一个模块至少需要被引用多少次才会被抽离出来。设置为2意味着只有当模块至少被两个不同的入口点引用时，才会被抽离到公共块中。
                    minChunks: 2,
                    // 优先级
                    priority: -20,
                    minSize: 0,
                    chunks: 'all',
                    // 如果模块已经存在就不重复创建
                    reuseExistingChunk: true
                },
                common2: {
                    name: 'common2',
                    // 公共模块
                    //表示一个模块至少需要被引用多少次才会被抽离出来。设置为2意味着只有当模块至少被两个不同的入口点引用时，才会被抽离到公共块中。
                    minChunks: 2,
                    // 优先级
                    priority: -30,
                    minSize: 0,
                    chunks: 'all',
                    // 如果模块已经存在就不重复创建
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        // 打包文件时添加注释
        new webpack.BannerPlugin({
            banner: 'author: YJW',
        }),
    ]
}

module.exports = merge(baseConfig, prodConfig)