import React from 'react';

function TurnosLayout(props) {
	return(
		<div className="TurnosList">
			{props.children}
		</div>
	)
}

export default TurnosLayout;