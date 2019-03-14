import React from 'react';

import './turno.css'

function Turno(props) {
	return(
		<div className={`turno turno-${props.Ticket}`}>
            <div className="media">
                <div className="media-body">
                    <h5 className="mt-0 mb-1">{props.Oficina}</h5>
                </div>
                <div className="ticket align-self-center">
                	<span className="turno">{props.Turno}</span>
                	<span className="label">Turno</span>
                </div>
            </div>
        </div>
	)
}

export default Turno;