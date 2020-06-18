
import React from 'react'  // 创建组件 虚拟dom 组件生命周期
import ReactDom from 'react-dom'  // 把创建好的组件和虚拟dom 放到页面上展示

function CommetItem(props) {
    return <div>
    <h2>{props.user}</h2>
    <p>{props.content}</p>
    </div>
}

class Father extends React.Component {
    constructor() {
        super()
        this.state = {
            commenList: [
                {id: 1, user: '张三', content: 'hahaha'},
                {id: 2, user: '张三2', content: 'hahaha'},
                {id: 3, user: '张三3', content: 'hahaha'},
                {id: 4, user: '张三4', content: 'hahaha'},
            ]
        }
    }

    render() {
        return <div>
            <h1>这是评论表组件</h1>
    {this.state.commenList.map(item => <CommetItem key={item.id} {...item}></CommetItem>)}
        </div>
    }
}
ReactDom.render(<Father></Father>, document.getElementById('app'))

