import React from 'react';

import './turno.css'

function TurnoLayout(props) {
	return(
		<div className={`media turno turno-${props.Ticket}`}>
            <div className="media-body">
                <h5 className="mt-0 mb-1">{props.Oficina}</h5>
            </div>
            <div className="ticket align-self-center">
            	<span className="turno">{props.Turno}</span>
            	<span className="label">Turno</span>
            </div>
        </div>
	)
}

export default TurnoLayout;