/**
 *
 * @title toast
 * @description toast关闭回调
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
            transition: 'fade',
            icon: 'hourglass',
            onClose: function(){
                alert('toast close');
            }
        });
    }
    render () {
        return (
            <div className="demoPadding">
                <button className="btn" onClick={this.fPopToast}>关闭回调</button>
            </div>
        )
    }
}

export default Demo4;
