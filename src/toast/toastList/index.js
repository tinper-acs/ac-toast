import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ToastItem from '../toastItem/toastItem';
import './index.scss';

class ToastList extends Component{
    constructor(props){
		super(props);
		this.state = {
			toasts: [],
			hasMask: true
		};
		this.toastNum = 0;
		this.toasts = [];
		this.queueTimer = null;
	}
	getUUID(){
        return 't-' + new Date().getTime() + '-' + ++this.toastNum;
    }
	add(props){
		props.id = props.id || this.getUUID();
		const toastItem = <ToastItem key={props.id} seq={this.toastNum-1} {...props} />
		switch(toastItem.props.mode){
			//强行冲掉前面的，只显示它自己
			case 'override':
				clearTimeout(this.queueTimer);
				this.setState({
					toasts: [toastItem]
				})
				break;
			case 'queue':
				this.toasts.push(toastItem);
				this.consumeDebounce();
				break;
			case 'order':
				clearTimeout(this.queueTimer);
				this.toasts.push(toastItem);
				this.setState({
					toasts: this.toasts
				})
				break;
			default:
				break;
		}
	}
	consumeDebounce(){
		clearTimeout(this.queueTimer);
		this.queueTimer = setTimeout(() => {
			this.consume()
		},0);
	}
	consume(){
		let duration = 0;
		let queue = this.toasts;
		let item;
		while(item = queue.shift()){
			setTimeout((item) => {
				this.setState({
					toasts: [item]
				});
			},duration,item)
			duration += item.props.duration;
		}
	}
	render(){
		let {toasts} = this.state;

		return (
			<div className="toasts">
				{toasts}
			</div>
		)
	}
}


export default ToastList;
