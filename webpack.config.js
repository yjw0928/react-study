const { env } = require('process');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require("webpack")


module.exports = {
    entry: './src/index.tsx', // 入口文件
    output: { // 出口文件
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js',
        // 打包之前清空出口目录
        clean: true,
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
                        // antd 属于按需加载，需要使用babel-plugin-import
                        // 加载组件的时候自动加载样式文件
                        plugins: [
                            [
                                "import",
                                {
                                    "libraryName": "antd",
                                    "style": true
                                }
                            ],
                        ],
                        compact: true
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
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: { lessOptions: { javascriptEnabled: true } },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: false } },

                ],
            },
        ]
    },
    // 文件解析
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [

        // html插件
        new HtmlWebpackPlugin({ template: './src/index.html' }),

        // 显示打包进度
        new ProgressPlugin({
            activeModules: true,         // 默认false，显示活动模块计数和一个活动模块正在进行消息。
            entries: true,  			   // 默认true，显示正在进行的条目计数消息。
            modules: false,              // 默认true，显示正在进行的模块计数消息。
            modulesCount: 5000,          // 默认5000，开始时的最小模块数。PS:modules启用属性时生效。
            profile: false,         	   // 默认false，告诉ProgressPlugin为进度步骤收集配置文件数据。
            dependencies: false,         // 默认true，显示正在进行的依赖项计数消息。
            dependenciesCount: 10000,    // 默认10000，开始时的最小依赖项计数。PS:dependencies启用属性时生效。
        })


    ],
    devtool: 'source-map',// 源码调试
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        historyApiFallback: true,
        hot: true
    },
    mode: env.mode,
    target: 'node',
}