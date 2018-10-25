/**
 *
 * @title 应用组件名称
 * @description toast图标示例
 *
 */

import React, { Component } from 'react';
import Toast from '../../src/index';

class Demo2 extends Component {
    componentDidMount(){
        Toast.info({
            msg: '提交中...',
            duration: 3000,
            transition: 'fade',
            icon: 'hourglass'
        });
    }
    render () {
        return (
            <div className="demoPadding">
                Toast info
            </div>
        )
    }
}

export default Demo1;
