/**
 *
 * @title toast
 * @description toast 不同颜色示例
 *
 */

import React, { Component } from 'react';
import Toast from '../../src/index';

class Demo4 extends Component {
    fPopToast(type){
        const map = {
            success: '提交成功',
            warning: '提交警告',
            error: '提交错误'
        }
        const msg = map[type];
        Toast[type]({
            msg: '提交信息',
            duration: 300000,
            transition: 'fade',
            icon: type
        });
    }
    render () {
        return (
            <div className="demoPadding">
                <button className="btn" onClick={this.fPopToast.bind(this,'success')}>success</button>
                <button className="btn" onClick={this.fPopToast.bind(this,'warning')}>warning</button>
                <button className="btn" onClick={this.fPopToast.bind(this,'error')}>error</button>
            </div>
        )
    }
}

export default Demo4;