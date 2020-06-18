
import React from 'react'  // 创建组件 虚拟dom 组件生命周期
import ReactDom from 'react-dom'  // 把创建好的组件和虚拟dom 放到页面上展示

// 导入时，默认，如果不做配置的话，不能省略组件文件的后缀jsx
// 可以配置webpack的resolve.extensions属性['.jsx']
// import Hello from './components/hello'
// 配置webpack的resolve.alias可以这样写，@代表项目跟目录下的src
import Hello from '@/components/hello'

const dog = {
    name: '大黄',
    age: 2,
}
// 手动配置传给子组件的prop
// ReactDom.render(<Hello name={dog.name} age={dog.age}></Hello>, document.getElementById('app'))

// 使用展开运算符传递prop,默认对象的key是prop
ReactDom.render(<Hello {...dog}></Hello>, document.getElementById('app'))

