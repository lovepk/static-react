import React from 'react'  // 创建组件 虚拟dom 组件生命周期

// 首先继承React.Component类
// 使用class创建的组件可以有自己的私有数据和生命周期函数
export default class Hello extends React.Component {
    constructor() {
        // 由于Hello继承了React.Component，所以自己的构造器要先调用super(先执行完React.Component的构造器)
        super()
        this.data = {
            message: '我是class组件的私有属性'
        }
    }

    // 然后声明render函数,且render函数必须返回合法的jsx虚拟dom元素
    // render是实例方法
    render() {
        // this表示当前组件的实例对象，所以可以直接访问props
        // 无论是class创建组件还是构造函数创建组件props都是只读的
        // this.props.name = 'jun' //Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
        this.data.message = 'class组件的私有属性是可读的'
        return <h2>---{this.props.name}---{this.props.message}---{this.data.message}--</h2>
    }
}