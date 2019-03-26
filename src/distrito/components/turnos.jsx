import React from 'react';

function Turnos(props) {
	return(
		<div className="turnos-list">
			{props.children}
		</div>
	)
}

export default Turnos;