import React from 'react';

import './header.css';

function Header(props) {
    return(
    	<div className="distrito-header shadow-sm rounded">
	        <div className="media">
	            <div className="media-body">
	                <h5 className="mt-0 mb-1">{props.title}</h5>
	                <p>{props.description}</p>
	            </div>
	            {!props.reiniciarFiltro &&
	            	<div onClick={props.handlerModal} className="btn btn-primary align-self-center">Filtrar</div>
	            }

	            {props.reiniciarFiltro &&
	            	<div onClick={props.handlerModal} className="btn btn-primary align-self-center">Reiniciar</div>
	            }
	        </div>
        </div>
    )
}

export default Header;
