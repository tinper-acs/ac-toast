import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';
import '../icon/iconfont.css';

const propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	msg: PropTypes.string,
	horizontal: PropTypes.oneOf(['left', 'center', 'right']),
	vertical: PropTypes.oneOf(['top', 'middle', 'bottom']),
	transition: PropTypes.oneOf(['fade','slide-left']),
	duration: PropTypes.number,
	mode: PropTypes.string,
	onClose: PropTypes.func,
	seq: PropTypes.number,
	mode: PropTypes.oneOf(['override','queue','order'])
}

const defaultPropTypes = {
	horizontal: 'center',
	vertical: 'middle',
	transition: 'fade',
	duration: 3000,
	num: 0,
	mode: 'queue',
}

class ToastItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true
		}
		this.close = this.close.bind(this);
		this.fBuildIcon = this.fBuildIcon.bind(this);
	}
	componentDidMount(){
		const {duration} = this.props;
		const animateTime = 300 * 2;
		setTimeout(() => {
			this.close();
		}, duration + animateTime);
	}
	fBuildIcon(icon){
		const innerIcons = ['info','success','warning','error','hourglass','loading'];
		if(innerIcons.indexOf(icon) > -1){
			return 'icon icon-' + icon;
		}
		return icon;
	}
	close(){
		const {close,onClose} = this.props;
		close && close(this);
		onClose && onClose();
	}
	render() {
		let {id, msg, horizontal, vertical, duration, className, seq, transition, mode, icon,img} = this.props;
		let toastClass = classNames('t-con', 't-' + horizontal, 't-' + vertical, className);
		//排序模式样式
		let orderStyle = {};
		if(mode == 'order'){
			let transform = 100 * seq + 50;
			orderStyle = {
				transform: 'translateY(-'+transform+'%)',
				webKitTransform: 'translateY(-'+transform+'%)'
			}
		}
		//图标样式
		icon = this.fBuildIcon(icon);
		//文字样式
		let textClass = classNames('t-text',{
			't-text-icon': !!icon || !!img
		});

		return (
			<div id={id} className={toastClass} style={orderStyle}>
				<div className="t-content">
					{img ? <img src={img}></img> : ''}
					{icon ? <i className={icon}></i> : ''}
					<div className={textClass}>{msg}</div>
				</div>
			</div>
		);
	}
}

ToastItem.propTypes = propTypes;
ToastItem.defaultProps = defaultPropTypes;

export default ToastItem;
