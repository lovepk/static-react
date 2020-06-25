import React from 'react'  // 创建组件 虚拟dom 组件生命周期

export default class BindEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            message: '我是class组件的私有属性'
        }
    }

    render() {
        // 在React中有一套自己的事件绑定机制
        return <div>
            <button onClick={() => this.myClickHander('猪头')}>按钮</button>
            <div>{this.state.message}</div>
            </div>
    }

    // 这是一个实例方法
    myClickHander = (arg) => {
        // 在React中如果想修改this.state中的数据this.state.*** = ***，不能这么用，应该调用React提供的setState()方法
        // this.state.message = arg
        this.setState({
            message: arg
        }, () => {
            console.log(this.state.message)
        })
        // setState方法的执行是异步的，如果调用setState方法后，如果想立即获取最新的值不能像下面这样写
        console.log(this.state.message)
    }
}