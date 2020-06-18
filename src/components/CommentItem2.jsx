import React from 'react'

// 导入组件需要的样式表,且直接导入的样式表，在全局都生效, 因为样式表没有模块作用域，一旦打包后加载会全局生效的
// vue中也有样式冲突的问题，vue的解决是为style标签加了个scope指令
// react中没有指令的概念，react解决方案是在webpack的配置中的css-loader加参数modules，表示为普通css启用模块化
import cssobj from '../css/commentList.css'
// 普通css样式没有经过webpack启用模块化之前，导出的是个{}
console.log(cssobj) //{}
export default function CommetItem(props) {
    return <div>
    <h2 className="user">{props.user}</h2>
    <p>{props.content}</p>
    </div>
}