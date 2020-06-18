import React from 'react'

import CommetItem from './CommentItem3'

export default class Father extends React.Component {
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
            {/* 在jsx中写行内样式不能想html那样直接给style属性设置字符串 */}
            {/* 而是应该这么写 style={{ color: 'red' }} */}
            {/* 如果行内样式是数值类型的可以不用引号包裹，而如果是字符串类型的则必须用引号包裹 */}
            <h1 style={{ color: 'red', fontSize: '35px', zIndex: 3, textAlign: 'center', fontWeight: 200 }}>这是评论表组件</h1>
            {/* 经过webpack启用的css模块化只对类和id生效， 对普通标签不生效 */}
            <p>aaa</p>
    {this.state.commenList.map(item => <CommetItem key={item.id} {...item}></CommetItem>)}
        </div>
    }
}