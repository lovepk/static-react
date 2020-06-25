
import React from 'react'  // 创建组件 虚拟dom 组件生命周期
import ReactDom from 'react-dom'  // 把创建好的组件和虚拟dom 放到页面上展示

import BindEvent from './components/BindEvent'



ReactDom.render(<BindEvent></BindEvent>, document.getElementById('app'))

