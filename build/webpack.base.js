
// 公共的 webpack 配置
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinicssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

// 读取 node_env 环境变量的值
let nodeEnv = process.env.mode;

if (!nodeEnv) {
    nodeEnv = "development";
}

const isProd = nodeEnv === "production";

const envVars = [
    ".env",
    `.env.${nodeEnv}`,
    `.env.${nodeEnv}.local`,
    ".env.local",
];

// 读取当前构建环境对应的环境变量文件的所有内容，将其注入到环境变量中
envVars.forEach((envVar) => {
    const envFilePath = resolve(__dirname, "..", envVar);
    const envFileExists = require("fs").existsSync(envFilePath);
    if (envFileExists) {
        require("dotenv").config({
            path: envFilePath,
        });
    }
});

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
    // 配置入口
    entry: resolve(__dirname, "..", "src", "index.tsx"),

    // 配置打包出口
    output: {
        path: resolve(__dirname, "..", "dist"),
        // 使用文件指纹
        filename: "js/[name].[contenthash:6].js",
        // 从 webpack5 开始，只要开启这个开关，那么每一次构建会自动清理输出目录
        clean: true,
        // 打包后访问的资源前缀
        publicPath: "/",
    },
    // 配置路径别名
    resolve: {
        alias: {
            "@": resolve(__dirname, "..", "src"),
            vue$: "vue/dist/vue.runtime.esm-bundler.js",
        },
        // 配置模块的访问路径
        extensions: [".js", ".ts", ".tsx", ".vue", ".json"],
    },
    // 配置插件
    plugins: [
        new HtmlWebpackPlugin({
            // 指定 html 模板的路径
            template: resolve(__dirname, "..", "src", "index.html"),
            // 该配置会注入到 html 文件的模板语法中
            title: process.env.APP_TITLE,
        }),

        // 提取js中的css文件，合并打包
        new MinicssExtractPlugin({
            filename: "css/[name].[contenthash:6].css",
            chunkFilename: "css/[name].[contenthash:6].css",
        }),

        // 复制静态资源到输出目录
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: resolve(__dirname, "..", "src", "public"),
        //             to: resolve(__dirname, "..", "dist"),
        //             toType: "dir",
        //             globOptions: {
        //                 ignore: ["**/index.html", "**/.DS_Store"],
        //             },
        //             info: {
        //                 minimized: true, // 注意：minimize 应该是 minimized，根据CopyWebpackPlugin的文档进行修正
        //             },
        //         },
        //     ],
        // }),

        // 显示打包进度
        new webpack.ProgressPlugin({
            activeModules: true,         // 默认false，显示活动模块计数和一个活动模块正在进行消息。
            entries: true,  			   // 默认true，显示正在进行的条目计数消息。
            modules: false,              // 默认true，显示正在进行的模块计数消息。
            modulesCount: 5000,          // 默认5000，开始时的最小模块数。PS:modules启用属性时生效。
            profile: false,         	   // 默认false，告诉ProgressPlugin为进度步骤收集配置文件数据。
            dependencies: false,         // 默认true，显示正在进行的依赖项计数消息。
            dependenciesCount: 10000,    // 默认10000，开始时的最小依赖项计数。PS:dependencies启用属性时生效。
        }),
    ],
    module: {
        // 配置 loader
        rules: [
            // 配置 js loader
            // {
            //     test: /\.js$/,
            //     use: "babel-loader",
            //     exclude: /node_modules/,
            // },

            // 匹配 .ts(x)
            {
                test: /\.(tsx|ts)?$/,
                // 先暴力排除 node_modules 目录
                exclude: /node_modules/,
                use: [

                    // 在 ts 处理完成之后，将内容交给 babel-loader 处理
                    {
                        loader: "babel-loader",
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
                    {
                        loader: "ts-loader",
                        options: {
                            // 在编译 ts 的时候关闭类型检查，只进行代码转换
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    nodeEnv === 'development' ? 'style-loader' :
                        // 将css 打包到单独的文件中，生产环境优化   
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it uses publicPath in webpackOptions.output
                                publicPath: "../",
                            },
                        },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: { lessOptions: { javascriptEnabled: true } },
                    },
                ]
            },
            // webpack5处理图片相关的静态资源
            {
                test: /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/,
                // 使用 webpack5 新特性，不再需要使用loader去进行处理
                // 而且 assets 是 webpack5 通用的资源处理类型
                // 默认情况下 8kb 以下的资源会被转化为 base64 编码
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 自定义 10 kb 以下的资源会被转化为 base 64 位编码
                        maxSize: 10 * 1024,
                    },
                },
                generator: {
                    // 输出图片的目录
                    // outputPath: "images",
                    // 输出图片的名称
                    filename: "images/[name].[contenthash:6].[ext]",
                },
            },
            // svg 类型的静态资源期望转为为 asset/resource 类型进行处理
            {
                test: /\.(svg)(\?.*)?$/,
                // 默认会将构建结果导出单独的配置文件
                type: "asset/resource",
                generator: {
                    // 输出 svg 的目录
                    // outputPath: "images",
                    // 输出 svg 的名称
                    filename: "svgs/[name].[contenthash:6].[ext]",
                },
            },
        ],
    },
};
