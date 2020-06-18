
import React from 'react'  // 创建组件 虚拟dom 组件生命周期
import ReactDom from 'react-dom'  // 把创建好的组件和虚拟dom 放到页面上展示

// import _ from '@/class使用'
// import _ from '@/class继承'

// import _ from '@/class继承-super'
import Hello from '@/components/组件class写法'

// 这里的<Hello></Hello> 是Hello类的实例
const obj = {
    name: 'jack',
    message: 'hello!你好'
}
ReactDom.render(<Hello {...obj}></Hello>, document.getElementById('app'))

