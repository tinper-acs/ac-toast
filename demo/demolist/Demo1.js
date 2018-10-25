/**
 *
 * @title toast
 * @description toast基本示例
 *
 */

import React, { Component } from 'react';
import Toast from '../../src/index';

class Demo1 extends Component {
    componentDidMount(){
    }
    fPopToast(){
        Toast.info({
            msg: '提交中...',
            duration: 3000,
            mode: 'order',
            transition: 'fade',
            icon: 'hourglass',
            onClose: function(){
                console.log('toast close');
            }
        });
        // Toast.info({
        //     msg: 'toast info1',
        //     duration: 2000,
        //     mode: 'order'
        // });
        // Toast.info({
        //     msg: 'toast info2',
        //     duration: 2000,
        //     mode: 'order'
        // });
        // Toast.info({
        //     msg: 'toast info3',
        //     duration: 2000,
        //     mode: 'order'
        // });
        // Toast.info({
        //     msg: 'toast info4',
        //     duration: 10000
        // });
        // setTimeout(() => {
        //     Toast.success({
        //         msg: 'toast info2' 
        //      });
        // },3000);
        // setTimeout(() => {
        //     Toast.warning({
        //         msg: 'toast info2' 
        //     });
        // },6000);
        // setTimeout(() => {
        //     Toast.error({
        //         msg: 'toast info2'
        //     });
        // },9000);
    }
    render () {
        return (
            <div className="demoPadding">
                <button className="btn" onClick={this.fPopToast}>toast</button>
            </div>
        )
    }
}

export default Demo1;
