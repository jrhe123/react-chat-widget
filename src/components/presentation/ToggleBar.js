import React, { Component } from 'react';

import './ToggleBar.css';


import {BUTTON} from './ToggleBar.style';


class ToggleBar extends Component{



	render(){

		let imgUrl = this.props.toggle ? 'http://res.cloudinary.com/dqtdsrmtz/image/upload/v1501907887/mctadhunj3incpzld2bs.png' : 'http://res.cloudinary.com/dqtdsrmtz/image/upload/v1501907891/tmdsa8khyhzzkruwamw7.png';
		let borderRadius = this.props.toggle ? '50%' : '13px';
		const divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            borderRadius: borderRadius
        }

		return(
			<BUTTON className={this.props.toggle ? "rotate" : "btn-pop"} style={divStyle} onClick={this.props.onToggle.bind(this)} />
		)
	}
}

export default ToggleBar
