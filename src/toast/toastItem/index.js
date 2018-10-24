import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

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
	}
	componentDidMount(){
		const {duration} = this.props;
		const animateTime = 300 * 2;
		setTimeout(() => {
			this.close();
		}, duration + animateTime);
	}
	close(){
		// this.setState({
		// 	show: false
		// })
		if(this.props.onClose){
			this.props.onClose(this);
		}
	}
	render() {
		let {id, msg, horizontal, vertical, duration, className,seq} = this.props;
		let {show} = this.state;
		let toastClass = classNames('t-con', 't-' + horizontal, 't-' + vertical, className, {
			't-hide': !show
		});
		let transform = 100 * seq + 50;

		return (
			<div id={id} className={toastClass} style={{transform:'translateY(-'+transform+'%)'}}>
				<span className="t-content">{msg}</span>
			</div>
		);
	}
}

ToastItem.propTypes = propTypes;
ToastItem.defaultProps = defaultPropTypes;

export default ToastItem;
