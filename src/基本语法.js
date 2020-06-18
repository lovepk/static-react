console.log('webpack-dev-server')
// webpack-dev-server 打包好的main.js是在内存中，托管到webpack-dev-server启用的服务器的根目录下，
// 可以通过http://localhost:8080/main.js访问到


// 1.这两个导入必须这么写
import React from 'react'  // 创建组件 虚拟dom 组件生命周期
import ReactDom from 'react-dom'  // 把创建好的组件和虚拟dom 放到页面上展示

// 2.创建虚拟dom元素
// 参数1 字符串，表示元素的名称
// 参数2 一个对象或null，表示这个元素的dom属性
// 参数3 子节点
// 参数n-1 其他子节点
// 参数n 其他子节点
// const h1 = React.createElement('h1', {id: 'h1', title: '我是title属性'}, '这是h1的文本节点')

// const myDiv = React.createElement('div', {}, '今天我在学react', h1)

// 注意在js中默认不能写入类似html标记
// 不过可以使用babel来转换这些标记
// 在js中混合书写html标记的语法叫jsx语法,符合xml规范的，比html语法严格些
// 当需要往jsx中写入js表达式时用{}包起来
const b = true
const h2 = <h2>我是子节点h2</h2>
const arr = [
    <h3>000</h3>,
    <h3>111</h3>,
    <h3>222</h3>
]
const strArr = ['小米', '华为', '三星']
const nameArr = []
strArr.forEach(ele => {
    const temp = <h5 key={ele}>{ele}</h5>
    nameArr.push(temp)
})
const h1 = <div id="h1" title="我是title属性">
    {/* sfs */}
    这是h1的文本节点 {b ? '真' : '假'} {h2} 
    <hr />
    {nameArr}
    <hr />
    {strArr.map(ele => <h3 key={ele}>{ele}</h3>)}
    </div>
// babel 将上面的jsx语句转换成const h1 = React.createElement('h1', {id: 'h1', title: '我是title属性'}, '这是h1的文本节点')

// 3.使用ReactDom 把虚拟dom渲染到页面上
// 参数1 要渲染的虚拟dom元素
// 参数2 渲染到哪里（容器），页面上指定的一个容器
ReactDom.render(h1, document.getElementById('app'))

