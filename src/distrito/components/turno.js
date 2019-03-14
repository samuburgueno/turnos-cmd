import React from 'react';

import './turno.css'

function Turno(props) {
	return(
		<div className={`turno turno-${props.Ticket}`}>
            <div className="media">
                <div className="media-body">
                    <h5 className="mt-0 mb-1">{props.Oficina}</h5>
                    {props.Llamados && props.Llamados > 1 &&
                        <div className="alert alert-warning mr-3" role="alert">
                            <small>Este turno fué llamado mas de 1 vez</small>
                        </div>
                    }
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