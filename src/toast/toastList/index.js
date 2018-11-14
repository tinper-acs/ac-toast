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
		this.removeToast = this.removeToast.bind(this);
	}
	getUUID(){
        return 't-' + new Date().getTime() + '-' + ++this.toastNum;
    }
	add(props){
		props.id = props.id || this.getUUID();
		const toastItem = <ToastItem seq={this.toasts.length} {...props} removeToast={this.removeToast} />;
		props = toastItem.props;
		const transition = props.transition;
		const toastTransItem =(
			<CSSTransition
				key={props.id}
				timeout={300}
				classNames={transition}
			>
				{toastItem}
			</CSSTransition>
		);
		switch(props.mode){
			case 'queue':
				this.toasts.push(toastTransItem);
				this.consumeDebounce();
				break;
			case 'layout':
				clearTimeout(this.queueTimer);
				this.toasts.push(toastTransItem);
				this.setState({
					toasts: this.toasts
				})
				break;
			//override 强行冲掉前面的，只显示它自己
			default:
				clearTimeout(this.queueTimer);
				this.toasts = [toastTransItem];
				this.setState({
					toasts: this.toasts
				})
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
		const animateTime = 300;
		while(item = queue.shift()){
			setTimeout((item) => {
				this.toasts = [item];
				this.setState({
					toasts: this.toasts
				});
			},duration,item)
			duration += item.props.children.props.duration + animateTime;
			setTimeout((item) => {
				this.toasts = [];
				this.setState({
					toasts: this.toasts
				});
			},duration,item)
			duration += animateTime;
		}
	}
	removeToast(props){
		if(props.mode != 'queue'){
			this.toasts = this.toasts.filter((item) => item.key != props.id);
			this.setState({
				toasts: this.toasts
			});
		}
	}
	render(){
		let {toasts} = this.state;

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
