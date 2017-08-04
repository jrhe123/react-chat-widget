import React, { Component } from 'react';


import {BUTTON} from './ToggleBar.style';


class ToggleBar extends Component{



	render(){

		let imgUrl = this.props.toggle ? 'http://res.cloudinary.com/dqtdsrmtz/image/upload/v1501814805/qezte6sbolkfymefc5lw.gif' : 'http://res.cloudinary.com/dqtdsrmtz/image/upload/v1501814811/wwzvaftnzxljfjjunylg.png';
		let borderRadius = this.props.toggle ? '50%' : '13px';
		const divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            borderRadius: borderRadius
        }

		return(
			<BUTTON className={this.props.toggle ? "rotate" : ""} style={divStyle} onClick={this.props.onToggle.bind(this)} />
		)
	}
}

export default ToggleBar
