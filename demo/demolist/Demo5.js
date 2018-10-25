/**
 *
 * @title toast
 * @description toast loading示例
 *
 */

import React, { Component } from 'react';
import Toast from '../../src/index';

class Demo4 extends Component {
    componentDidMount(){
        
    }
    fPopToast(){
        Toast.info({
            msg: '提交中...',
            duration: 3000,
            mode: 'order',
            transition: 'fade',
            icon: 'loading'
        });
    }
    render () {
        return (
            <div className="demoPadding">
                <button className="btn" onClick={this.fPopToast}>loading示例</button>
            </div>
        )
    }
}

export default Demo4;
