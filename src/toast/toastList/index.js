import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ToastItem from '../toastItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './index.scss';

class ToastList extends Component{
    constructor(props){
		super(props);
		this.state = {
			toasts: []
		};
		this.toastNum = 0;
		this.toasts = [];
		this.queueTimer = null;
		this.fToastClose = this.fToastClose.bind(this);
	}
	getUUID(){
        return 't-' + new Date().getTime() + '-' + ++this.toastNum;
    }
	add(props){
		props.id = props.id || this.getUUID();
		const toastItem = <ToastItem seq={this.toastNum-1} {...props} onClose={this.fToastClose} />;
		props = toastItem.props;
		const transition = props.transition;
		console.log(transition);
		const toastTransItem =(
			<CSSTransition
				key={props.id}
				timeout={15000}
				classNames={transition}
			>
				{toastItem}
			</CSSTransition>
		);
		switch(props.mode){
			//强行冲掉前面的，只显示它自己
			case 'override':
				clearTimeout(this.queueTimer);
				this.setState({
					toasts: [toastTransItem]
				})
				break;
			case 'queue':
				this.toasts.push(toastTransItem);
				this.consumeDebounce();
				break;
			case 'order':
				clearTimeout(this.queueTimer);
				this.toasts.push(toastTransItem);
				console.log(this.toasts);
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
	fToastClose(toastItem){
		this.toasts = this.toasts.filter((item) => item.id != toastItem.id);
		this.setState({
			toasts: this.toasts
		});
	}
	render(){
		let {toasts} = this.state;
		console.log(toasts);

		return (
			<div className="toasts">
				<TransitionGroup>
					{toasts}
				</TransitionGroup>
			</div>
		)
	}
}


export default ToastList;
