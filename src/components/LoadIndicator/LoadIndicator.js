import React from 'react';
import './LoadIndicator.scss';

function LoadIndicator(props) {
	const { text } = props;

	return (
		<div className="Load-indicator">
			<div className="loading-icon">&nbsp;</div>
			{text ? <span className="loading-text">{text}</span> : ''}
		</div>
	);
}

export default LoadIndicator;
