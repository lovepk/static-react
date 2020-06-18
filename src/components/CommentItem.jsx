import React from 'react'
// 第一层封装 将样式对象和结构分离
const contentStyle = {fontSize: '12px'}
// 第二层封装 为大的样式对象
const style = {
    user: {fontSize: '14px'}
}
// 第三层封装  抽离为单独的样式表 模块（js文件）
import styles from './style'
export default function CommetItem(props) {
    return <div style={styles.item}>
    <h2 style={style.user}>{props.user}</h2>
    <p style={contentStyle}>{props.content}</p>
    </div>
}