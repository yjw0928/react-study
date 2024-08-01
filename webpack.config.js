const { env } = require('process');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin, HotModuleReplacementPlugin } = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = env.mode === 'development'
module.exports = {
    entry: './src/index.tsx', // 入口文件
    output: { // 出口文件
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "../",
                        },
                    },
                    // 'style-loader',
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
                    // style-loader 将css 样式动态插入到style标签
                    // 开发环境，热更新
                    devMode ? 'style-loader' :
                        // 将css 打包到单独的文件中，生产环境优化   
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it uses publicPath in webpackOptions.output
                                publicPath: "../",
                            },
                        },

                    { loader: 'css-loader', options: { modules: false } },

                ],
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/inline',
            },
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // 忽略文件后缀
    },
    // externals: {
    //     react: 'React',
    //     // antd: 'Antd',
    // },

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
        }),

        //热更新
        // new HotModuleReplacementPlugin(),
        // css
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].[contenthash].css',
            // https://github.com/facebook/create-react-app/issues/5372
            ignoreOrder: true,
        }),
    ],
    optimization: {
        // 允许webpack将代码分割成更小的块
        splitChunks: {
            // 只有大于3kb的才会被分割
            minSize: 3000,
            // 分割规则
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    // 规则优先级，越低优先级越高
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    //表示一个模块至少需要被引用多少次才会被抽离出来。设置为2意味着只有当模块至少被两个不同的入口点引用时，才会被抽离到公共块中。
                    minChunks: 2,
                    // 规则优先级
                    priority: -20,
                    // 从入口文件引入的
                    chunks: 'initial',
                    minSize: 0,
                    // 如果模块已经存在就不重复创建
                    reuseExistingChunk: true
                }
            }
        }
    },
    watch: env.mode === 'development' ? true : false, //自动编译
    // 源码调试
    devtool: env.mode === 'development' ? 'source-map' : false,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        historyApiFallback: true,
        hot: true
    },
    mode: env.mode,
    target: 'web',
}