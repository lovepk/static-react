import React from 'react'

// 导入组件需要的样式表,且直接导入的样式表，在全局都生效, 因为样式表没有模块作用域，一旦打包后加载会全局生效的
// vue中也有样式冲突的问题，vue的解决是为style标签加了个scope指令
// react中没有指令的概念，react解决方案是在webpack的配置中的css-loader加参数modules，表示为普通css启用模块化
import cssobj from '../css/commentList.scss'
/* 经过webpack启用的css模块化只对类和id生效， 对普通标签不生效 */
console.log(cssobj) // 启用模块化后打印的不是空对象了，哈哈哈
// 可是css-loader只配置modules默认生成的类名不易阅读
// 输出类似{user: "eF9Fyg2ZljWXqvQ2T6ZlO"}
// 所以要自定义模块化输出的类名可以配置localIdentName,来生成想要的易于阅读的类名
export default function CommetItem(props) {
    return <div>
    <h2 className={cssobj.user}>{props.user}</h2>
    <p>{props.content}</p>
    </div>
}