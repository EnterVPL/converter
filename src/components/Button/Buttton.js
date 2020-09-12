import React from 'react';

function Button(props) {
	return (
		<button>{props.children}</button>
	);
}

Button.defaultProps = {
	label: "Enter label"
}

export default Button;