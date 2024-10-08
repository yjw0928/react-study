const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { join } = require('path');


/**
 * @type {import('webpack').Configuration}
 */

const devConfig = {

    plugins: [
        // 生成分析报告
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            openAnalyzer: true,
            generateStatsFile: false,
            statsOptions: null,
            logLevel: 'info'
        }),
    ],
    mode: "development",
    // webpack5 本身就直接支持了热更新
    // 定义sourceMap
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: join(__dirname, 'dist'),
        port: 9000,
        historyApiFallback: true,
        hot: true,
        open: true,
        historyApiFallback: true,
    }
}

module.exports = merge(baseConfig, devConfig)