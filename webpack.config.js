// 向外暴露一个打包的配置对象；
// 因为webpack是基于node构建的，而node是基于v8，所以chrome浏览器支持的js语法，webpack也支持
// 反之则不支持，比如export default 语法目前在webpack的配置中不支持
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 在内存中自动生成一个html文件的插件

// 创建一个插件的实例对象
const htmlPlug = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件 此时__dirname 是当前的webpack.config.js所在的目录
    filename: 'index.html'  // 在内存中生成的文件名称  同时会将内存中打包好的的main.js注入到页面中
})

module.exports = {
    mode: 'development', // development  production
    // 在webpack4.x中，有一个新特性：约定大于配置，约定默认的打包入口文件是src->index.js
    // 不过entry还是可以用的，配置了则覆盖了此约定
    plugins: [
        htmlPlug,
    ],
    module: { // 所有第三方模块的配置规则
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/  //使用babel-loader时千万不能 忘记配置exclude
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader?modules'], // loader数组中loader处理过程，从右往左，处理完交给下一个loader处理
                // 通过添加参数localIdentName，来实现自定义模块化输出的类名
                // path是样式表相对于项目根目录的路径
                // name是样式表的文件名
                // local是样式表中定义的类名或id名
                // hash 表示32位的hash值，通过冒号去前5-6位即可
                // 约定熟成，项目中自己的样式文件用scss,而一般第三方的都是css文件，所以只要为scss,less文件开启模块化即可
                use:[
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: {
                        //         localIdentName: '[path][name]-[local]-[hash:6]',
                        //     }
                        // }
                    },
                ],
            },
            // 处理第三方包中特殊文件
            {
                test: /\.ttf|woff|woff2|eot|svg$/, 
                use: ['url-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        // 约定熟成，项目中自己的样式文件用scss,而一般第三方的都是css文件，所以只要为scss,less文件开启模块化即可
                        options: {
                            modules: {
                                localIdentName: '[path][name]-[local]-[hash:6]',
                            }
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'], // 项目中import时这几种文件的后缀名可以不写
        // 别名
        alias: {
            '@': path.join(__dirname, './src') //项目中@代表项目根目录下src这层
        }
    }
}