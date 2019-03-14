import React from 'react';

import './header.css';

function Header(props) {
    return(
    	<div className="distrito-header">
	        <div className="media">
	            <div className="media-body">
	                <h5 className="mt-0 mb-1">{props.title}</h5>
	                <p>{props.description}</p>
	            </div>
	            <div className="btn btn-primary align-self-center">Filtrar</div>
	        </div>
        </div>
    )
}

export default Header;