import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo-rosario.png';

import './layout.css';

function Layout(props) {
	return(
		<div className="layout">
			<header>
          		<div className="navbar shadow-sm text-center navbar-expand-sm navbar-light">
					<div className="container d-flex justify-content-between">
						<a href={process.env.NODE_ENV === 'development' ? "/" : process.env.PUBLIC_URL} className="navbar-brand d-flex align-items-center">
							<img className="img-responsive" src={logo} alt="Logo de Rosario= "/>
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
	          	</div>
	        </header>
	        <div className="container">
	        	<div className="main row">
			        <div className="sidebar-left col-sm-3">
			        	{/*Menu mobile*/}
			        	<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<NavLink to="/distrito/norte" className="nav-item">Norte</NavLink>
			                    <NavLink to="/distrito/noroeste" className="nav-item">Noroeste</NavLink>
			                    <NavLink to="/distrito/centro" className="nav-item">Centro</NavLink>
			                    <NavLink to="/distrito/oeste" className="nav-item">Oeste</NavLink>
			                    <NavLink to="/distrito/sur" className="nav-item">Sur</NavLink>
							</ul>
						</div>
					    {/*Menu principal desktop*/}
					    <div className="d-none d-sm-block nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
					    	<h5><strong>Distritos</strong></h5>
                            <NavLink to="/distrito/norte" className="nav-link">Norte</NavLink>
                            <NavLink to="/distrito/noroeste" className="nav-link">Noroeste</NavLink>
                            <NavLink to="/distrito/centro" className="nav-link">Centro</NavLink>
                            <NavLink to="/distrito/oeste" className="nav-link">Oeste</NavLink>
                            <NavLink to="/distrito/sur" className="nav-link">Sur</NavLink>
                        </div>
			        </div>
			        <div className="col-sm-9">
				        <div className="row">
					        <div className="main-content col-sm-12 col-md-8">
					        	{props.children}
					        </div>
					        <div className="sidebar-right d-none d-md-block col-md-4">
					    		{/*Barra lateral derecha*/}
					        </div>
				        </div>
			        </div>
	        	</div>
	        </div>
		</div>
	)
}

export default Layout;
