import React from 'react';

import logo from '../../assets/img/logo-rosario.png';

import './layout.css';

function Layout(props) {
	return(
		<div className="Layout">
			<header>
	          <div className="navbar shadow-sm text-center">
	            <div className="container d-flex justify-content-between">
	              <a href="/" className="navbar-brand d-flex align-items-center">
	                <img src={logo} alt="Logo de Rosario= "/>
	              </a>
	              {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
	                <span className="navbar-toggler-icon"></span>
	              </button>*/}
	            </div>
	          </div>
	        </header>
			{props.children}
		</div>
	)
}

export default Layout;