import React from 'react';
import componentStyles from './LoadIndicator.module.scss';

function LoadIndicator(props) {
	const { text } = props;

	return (
		<div className={componentStyles.component}>
			<div className={componentStyles.icon}>&nbsp;</div>
			{text ? <span className={componentStyles.text}>{text}</span> : ''}
		</div>
	);
}

export default LoadIndicator;
