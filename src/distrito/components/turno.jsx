import React from 'react';
import { Link } from 'react-router-dom';

import './turno.css'

function Turno(props) {
	return(
        <Link
            to={`/distrito/${props.distrito}/${props.CodigoOficina}`}
            title={`Ver detalle de la oficina ${props.Oficina}`}
            className={`turno turno-${props.Numero}`}>
            <div className="media">
                <div className="media-body mr-3">
                    <h5 className="mt-0 mb-1">{props.Oficina}</h5>
                    {props.Llamados && props.Llamados === 2 &&
                        <span class="badge badge-warning text-uppercase text-secondary">{props.Llamados}&deg; llamado</span>
                    }

                    {props.Llamados && props.Llamados === 3 &&
                        <span class="badge badge-danger text-uppercase text-white">{props.Llamados}&deg; llamado</span>
                    }

                    {props.Turno.indexOf("*") !== -1 &&
                        <span class="badge badge-light text-uppercase text-secondary"><small>Turno derivado de otra oficina - {props.Ticket}</small></span>
                    }

                    {props.Turno.indexOf("!") !== -1 &&
                        <span class="badge badge-light text-uppercase text-secondary"><small>Turno con prioridad</small></span>
                    }
                </div>
                <div className="ticket align-self-center">
                	<span className="turno">{props.Letra+props.Numero}</span>
                	<span className="label">Turno</span>
                </div>
                <div className="arrow-icon align-self-center"></div>
            </div>
        </Link>
	)
}

export default Turno;
