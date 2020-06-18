import React from 'react'  // 创建组件 虚拟dom 组件生命周期

// 声明组件要引入React

// 组件抽离到单独的jsx文件中，并导出
// 使用构造函数创建的组件只能有props,没有自己的私有数据和生命周期函数
export default function Hello (props) {
    // props 是父组件传递过来的属性集合，是只读属性
    // 返回null，表示组件什么都不会渲染
    // 如果不为空，则必须是一个合法的jsx虚拟dom元素
    // return null
return <h2>我是组件返回的虚拟dom元素--{props.name}---{props.age}---</h2>
}
