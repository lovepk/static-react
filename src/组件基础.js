
import React from 'react'  // 创建组件 虚拟dom 组件生命周期
import ReactDom from 'react-dom'  // 把创建好的组件和虚拟dom 放到页面上展示

// 第一种创建组件的方式, 函数首字母必须是大写
function Hello (props) {
    // props 是父组件传递过来的属性集合，是只读属性
    // 返回null，表示组件什么都不会渲染
    // 如果不为空，则必须是一个合法的jsx虚拟dom元素
    // return null
return <h2>我是组件返回的虚拟dom元素--{props.name}---{props.age}---</h2>
}

const dog = {
    name: '大黄',
    age: 2,
}
// 手动配置传给子组件的prop
// ReactDom.render(<Hello name={dog.name} age={dog.age}></Hello>, document.getElementById('app'))

// 使用展开运算符传递prop,默认对象的key是prop
ReactDom.render(<Hello {...dog}></Hello>, document.getElementById('app'))

