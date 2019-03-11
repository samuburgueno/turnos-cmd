import React from 'react';

function Header(props) {
    return(
        <div class="media">
            <div class="media-body">
                <h5 class="mt-0 mb-1">{props.title}</h5>
                <p>{props.description}</p>
            </div>
            <div className="btn btn-primary align-self-center">Filtrar</div>
        </div>
    )
}

export default Header;
