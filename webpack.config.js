const env = require('process');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx', // 入口文件
    output: { // 出口文件
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js',
    },
    module: { // 打包loader
        rules: [
            {
                test: /\.[t|j]sx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react'
                        ],
                    }
                },

            },
            {
                test: /\.ts?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader', // 从 JS 中创建样式节点
                    },
                    {
                        loader: 'css-loader', // 转化 CSS 为 CommonJS
                    },
                    {
                        loader: 'less-loader', // 编译 Less 为 CSS
                    },
                ],
            },
        ]
    },
    // 文件解析
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.less'],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devtool: 'source-map',// 源码调试
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        historyApiFallback: true
    },
    mode: 'development',
    target: 'node',
}