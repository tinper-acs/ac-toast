/**
 *
 * @title toast
 * @description toast图标示例
 *
 */

import React, { Component } from 'react';
import Toast from '../../src/index';

class Demo2 extends Component {
    componentDidMount(){
        
    }
    fPopToast(){
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
                <button className="btn" onClick={this.fPopToast}>图标</button>
            </div>
        )
    }
}

export default Demo2;
