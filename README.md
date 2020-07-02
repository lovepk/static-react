# 这么支持jsx语法：
1. 安装babel及其相关依赖包；安装babel在webpack使用的loader
yarn add @babel/core --dev
yarn add @babel/preset-env --dev
yarn add @babel/preset-react --dev
yarn add @babel/plugin-transform-runtime --dev  // 插件
yarn add @babel/runtime  // 生产环境使用
// presets: preset是语法转换相关的，@babel/preset-env转换es6及更高版本的语法；@babel/preset-react转换jsx
yarn add babel-loader --dev 
// babel在webpack使用的loader

2. 在webpack配置文件中配置babel-loader

3. 创建babel的配置文件.babelrc，并完成相关配置
