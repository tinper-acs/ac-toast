/**
 *
 * @title 应用组件名称
 * @description 应用组件描述
 *
 */

import React, { Component } from 'react';
import Toast from '../../src/index';

class Demo1 extends Component {
    componentDidMount(){
        Toast.info({
            msg: 'toast info',
            duration: 3000,
            mode: 'order'
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
                Toast info
            </div>
        )
    }
}

export default Demo1;
