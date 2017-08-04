import React, { Component } from 'react';

export default (props) => {	

	const comment = props;
	let date = new Date(comment.timestamp).toUTCString();
	const formatted = formatDate(date);

	return (
		<div>
			<div style={style.time}>
				{formatted}
			</div>
			<div style={style.comment}> 
				{comment.text}
			</div>
		</div>
	)
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const style = {

	time:{
		textAlign:"left",
		color: "#8F8F8F",
		fontSize: "12px",
		paddingLeft:12,
		paddingTop:6
	},

	comment: {
		textAlign:"left",
		padding:"6px 12px 12px 12px", 
		borderBottom:"1px dotted #ddd"
	}
}