import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToastList from './toastList';
import ToastItem from './toastItem/toastItem';
import classNames from 'classnames';
import './index.scss';

let toastc;
let div = document.createElement('div');
div.className = 'toastc';
document.body.appendChild(div);
//添加参数
ReactDOM.render(<ToastList ref={(list) => {
    toastc = list;
}} />, div);

let Toast = {
    toastList: toastc,
    queue: [],
    hasInit: false,
    append(props) {
        if(this.toastList){
            console.log('111');
            props = this.queue.shift() || props;
            if(props){
                this.toastList.add(props);
            }
        }
        else{
            // if(!this.hasInit){
            //     this.hasInit = true;
            //     let div = document.createElement('div');
            //     div.className = 'toastc';
            //     document.body.appendChild(div);
            //     //添加参数
            //     ReactDOM.render(<ToastList {...props} ref={(list) => {
            //         this.toastList = list;
            //         this.consume();
            //     }} />, div);
            // }
        }
    },
    consume(){
        const queue = this.queue;
        let props;
        while(props = queue.shift()){
            this.append(props);
        }
    },
    push(props){
        this.queue.push(props);
        this.append(props);
    },
    info(props){
        //黑色
        this.push(props);
    },
    success(props){
        //绿色
        props.className = classNames(props.className,'t-success');
        this.push(props);
    },
    warning(props){
        //黄色
        props.className = classNames(props.className,'t-warning');
        this.push(props);
    },
    error(props){
        //红色
        props.className = classNames(props.className,'t-error');
        this.push(props);
    },
    hide(){

    }
}

export default Toast;
