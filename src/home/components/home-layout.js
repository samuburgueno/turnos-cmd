import React from 'react';
import { NavLink } from 'react-router-dom';

import './home-layout.css';

function HomeLayout(props) {
    return(
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <NavLink to="/distrito/norte" className="nav-link active">Distrito Norte</NavLink>
                            <NavLink to="/distrito/norte" className="nav-link active">Distrito Noroeste</NavLink>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout;
