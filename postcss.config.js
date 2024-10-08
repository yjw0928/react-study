//自动添加浏览器前缀和px转rem插件
const pxtorem = require('postcss-pxtorem');
let plugins = [require('autoprefixer')({ remove: false })];

if (process.env.BABEL_ENV === 'mob') {
    plugins.push(pxtorem({
        rootValue: 100,
        propWhiteList: [],
    }));
}

module.exports = {
    plugins
}